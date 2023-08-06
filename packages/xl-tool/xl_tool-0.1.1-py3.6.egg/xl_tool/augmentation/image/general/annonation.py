#!usr/bin/env python3
# -*- coding: UTF-8 -*-
import logging
import shutil
import xml.dom.minidom
from .preprocessing import read_with_rgb
import copy
import json
import os
import xml.dom
import xml.dom.minidom
from xml.dom.minidom import Document
from collections import defaultdict
from xl_tool.xl_io import file_scanning, read_txt

coordinate_name = ["xmin", "ymin", "xmax", "ymax"]


def get_bndbox(xml_file):
    """提取voc标注文件里面的bounding box坐标
    Args:
        xml_file: xml文件
    Returns：
        bndboxes:
            [{"name":annonation_class,"coordinates"：["xmin", "ymin", "xmax", "ymax"]}]
    """
    dom = xml.dom.minidom.parse(xml_file)
    doc = dom.documentElement
    bndboxes = []
    for object_node in doc.getElementsByTagName('object'):
        name = object_node.getElementsByTagName('name')[0].firstChild.data
        coordinates = [int(object_node.getElementsByTagName(i)[0].firstChild.data) for i in coordinate_name]
        bndboxes.append({"name": name, "coordinates": coordinates})
    return bndboxes


def get_boximgs(image_file, xml_file) -> list:
    """提取voc标注文件里面的bounding
    Args:
        image_file: 原始图像文件
        xml_file: xml文件
    Returns：
        boximgs:
            [{"img":boximg,"name"：annonation_class}]
    """
    img = read_with_rgb(image_file)
    bndboxes = get_bndbox(xml_file)
    boximgs = []
    for bndbox in bndboxes:
        boximg = img.crop(bndbox["coordinates"])
        boximgs.append({"img": boximg, "name": bndbox["name"]})
    return boximgs


def xml_object_extract(xml_file, image_file, save_path, object_classes=None, min_size_sum=100, w_h_limits=(10, 0.1)):
    """
    extract specified object   from xml_file
    Args:
        xml_file: str, xml path
        image_file: str, image path
        save_path:  str , 保存路径
        object_classes: List or None, object class to extract, None means all classes
        min_size_sum: min sum of width and height of object
        w_h_limits:  length-width ratio limit
    Returns:
    """

    def get_object_from_node(obj_element):
        name = obj_element.getElementsByTagName("name")[0].firstChild.data
        xmin = obj_element.getElementsByTagName("xmin")[0].firstChild.data
        ymin = obj_element.getElementsByTagName("ymin")[0].firstChild.data
        xmax = obj_element.getElementsByTagName("xmax")[0].firstChild.data
        ymax = obj_element.getElementsByTagName("ymax")[0].firstChild.data
        return name, int(xmin), int(ymin), int(xmax), int(ymax)

    dom_tree = xml.dom.minidom.parse(xml_file)
    dom = dom_tree.documentElement
    objects = dom.getElementsByTagName("object")
    img = read_with_rgb(image_file)
    for obj in objects:
        # print("提取目标")
        name, xmin, ymin, xmax, ymax = get_object_from_node(obj)
        w, h = xmax - xmin, ymax - ymin
        if object_classes:
            if name not in object_classes:
                continue
        if (xmax + ymax - xmin - ymin) <= min_size_sum:
            continue
        try:
            w_h = w / h
            if w_h > w_h_limits[0] or w_h < w_h_limits[1]:
                continue
            img_crop = img.crop((xmin, ymin, xmax, ymax))
            save_dir = save_path + "/" + name
            os.makedirs(save_dir, exist_ok=True)
            crop_file = os.path.join(save_dir, os.path.basename(image_file))
            img_crop.save(crop_file)
        except ZeroDivisionError:
            logging.warning("ZeroDivisionError: Object width or height is zero, please correct your annonation")

def xml_object_extract(xml_file, image_file, save_path, object_classes=None, min_size_sum=100, w_h_limits=(10, 0.1)):
    """
    extract specified object   from xml_file
    Args:
        xml_file: str, xml path
        image_file: str, image path
        save_path:  str , 保存路径
        object_classes: List or None, object class to extract, None means all classes
        min_size_sum: min sum of width and height of object
        w_h_limits:  length-width ratio limit
    Returns:
    """

    def get_object_from_node(obj_element):
        name = obj_element.getElementsByTagName("name")[0].firstChild.data
        xmin = obj_element.getElementsByTagName("xmin")[0].firstChild.data
        ymin = obj_element.getElementsByTagName("ymin")[0].firstChild.data
        xmax = obj_element.getElementsByTagName("xmax")[0].firstChild.data
        ymax = obj_element.getElementsByTagName("ymax")[0].firstChild.data
        return name, int(xmin), int(ymin), int(xmax), int(ymax)

    dom_tree = xml.dom.minidom.parse(xml_file)
    dom = dom_tree.documentElement
    objects = dom.getElementsByTagName("object")
    img = read_with_rgb(image_file)
    for obj in objects:
        # print("提取目标")
        name, xmin, ymin, xmax, ymax = get_object_from_node(obj)
        w, h = xmax - xmin, ymax - ymin
        if object_classes:
            if name not in object_classes:
                continue
        if (xmax + ymax - xmin - ymin) <= min_size_sum:
            continue
        try:
            w_h = w / h
            if w_h > w_h_limits[0] or w_h < w_h_limits[1]:
                continue
            img_crop = img.crop((xmin, ymin, xmax, ymax))
            save_dir = save_path + "/" + name
            os.makedirs(save_dir, exist_ok=True)
            crop_file = os.path.join(save_dir, os.path.basename(image_file))
            img_crop.save(crop_file)
        except ZeroDivisionError:
            logging.warning("ZeroDivisionError: Object width or height is zero, please correct your annonation")


class Text2XML:
    """通过文本信息生成XML
    """

    def __init__(self):
        self.annotation = "<annotation>\n{}\n</annotation>"
        self.folder = "    <folder>{}</folder>"
        self.filename = "    <filename>{}</filename>"
        self.path = "    <path>{}</path>"
        self.source = "    <source>\n        <database>{}</database>\n    </source>"
        self.size = "    <size>\n        <width>{}</width>\n        <height>{}</height>\n" \
                    "        <depth>3</depth>\n    </size>"
        self.segmened = "    <segmented>0</segmented>"
        self.object = "    <object>\n        <name>{}</name>\n        <pose>Unspecified</pose>\n" \
                      "        <truncated>0</truncated>\n        <difficult>0</difficult>\n" \
                      "        <bndbox>\n            <xmin>{}</xmin>\n            <ymin>{}</ymin>\n" \
                      "            <xmax>{}</xmax>\n            <ymax>{}</ymax>\n        </bndbox>" \
                      "\n    </object>"

    def get_objects(self, objects_info):
        temp = []
        for object_info in objects_info:
            temp.append(self.object.format(*object_info))
        return "\n".join(temp)

    def get_xml(self, folder, filename, path, source, size, objects_info):
        """
        生成目标检测xml文件
        Args:
            folder: 文件夹名字
            filename: 文件名
            path: 文件路径
            source: 源数据库名字
            size: 图片大小
            objects_info: 目标信息列表，格式如下：[(name,xmin,ymin,xmax,ymax),
                                                (name,xmin,ymin,xmax,ymax)]
        """
        objects = self.get_objects(objects_info)
        self.folder = self.folder.format(folder)
        self.filename = self.filename.format(filename)
        self.path = self.path.format(path)
        self.source = self.source.format(source)
        self.size = self.size.format(*size)
        self.object = objects
        all_info = [self.folder, self.filename, self.path, self.source, self.size, self.segmened, self.object]
        return self.annotation.format("\n".join(all_info))


class Coco2Voc:
    def __init__(self, pose="Unspecified", truncated="0", difficult="0", segmented="0",
                 addindent="    ", newline_seperator="\n"):
        self.pose = pose
        self.truncated = truncated
        self.difficult = difficult
        self.segmented = segmented
        self.addindent = addindent
        self.newline_seperator = newline_seperator

    def createEleNode(self, doc: Document, tag: str, attr):
        ele_node = doc.createElement(tag)

        text_node = doc.createTextNode(attr)

        ele_node.appendChild(text_node)
        return ele_node

    def createChildNode(self, doc: Document, tag: str, attr, parent_node):
        child_node = self.createEleNode(doc, tag, attr)
        parent_node.appendChild(child_node)

    def createObjectNode(self, doc: Document, attrs: dict):
        object_node = doc.createElement("object")
        self.createChildNode(doc, "name", attrs["cat_name"], object_node)
        self.createChildNode(doc, "pose", self.pose, object_node)
        self.createChildNode(doc, "truncated", self.truncated, object_node)
        self.createChildNode(doc, 'difficult', self.difficult, object_node)
        bndbox_node = doc.createElement("bndbox")
        self.createChildNode(doc, 'xmin', str(int(attrs['bbox'][0])), bndbox_node)

        self.createChildNode(doc, 'ymin', str(int(attrs['bbox'][1])), bndbox_node)

        self.createChildNode(doc, 'xmax', str(int(attrs['bbox'][0] + attrs['bbox'][2])),
                             bndbox_node)

        self.createChildNode(doc, 'ymax', str(int(attrs['bbox'][1] + attrs['bbox'][3])),
                             bndbox_node)

        object_node.appendChild(bndbox_node)

        return object_node

    def writeXMLFile(self, doc: Document, filename: str):
        with open(filename, "w") as tmpf:
            doc.writexml(tmpf, addindent=self.addindent, newl=self.newline_seperator, encoding="utf-8")
        with open(filename, "r") as f:
            temp = f.readlines()
        with open(filename, "w", encoding="utf-8") as f:
            f.write("".join(temp[1:]))

    @staticmethod
    def read_coco(coco_json: str, cat_id=-1):
        """
        Args:
            coco_json: coco json标注文件
            cat_id: 类别id,,-1表示提取所有类别，字符串表示某一大类
        """
        with open(coco_json, "r", encoding="utf-8") as f:
            data = json.load(f)
        if type(cat_id) == str:
            cat_id = [j["id"] for j in data['categories'] if j["supercategory"] == cat_id]
        images, categries, annotations = data["images"], data["categories"], data["annotations"]
        valid_image_id = set(
            [item["image_id"] for item in annotations if item["category_id"] in
             cat_id] if cat_id != -1 else [item["image_id"] for item in annotations])
        print("有效文件数量：{}".format(len(valid_image_id)))
        image_id_dict = {one["id"]: one for one in images if one["id"] in valid_image_id}
        cat_id_dict = {one["id"]: one for one in categries}
        anno_dict_list = defaultdict(list)
        for one in annotations:
            one = copy.deepcopy(one)
            one["cat_name"] = cat_id_dict[one["category_id"]]["name"].replace(" ", "_")
            anno_dict_list[one["image_id"]].append(one)
        # categries = [cat["name"] for cat in categries]
        return image_id_dict, cat_id_dict, anno_dict_list, categries

    @staticmethod
    def read_object365(coco_json: str, cat_id=-1):
        """
        Args:
            coco_json: coco json标注文件
            cat_id: 提取类别,-1表示提取所有类别，字符串表示某一大类，类别表示指定类别id
        """
        with open(coco_json, "r", encoding="utf-8") as f:
            data = json.load(f)
        if type(cat_id) == str:
            valid_cats = read_txt(cat_id, return_list=True)
            cat_id = [j["id"] for j in data['categories'] if j["name"] in valid_cats]
        images, categries, annotations = data["images"], data["categories"], data["annotations"]
        valid_image_id = set(
            [item["image_id"] for item in annotations if item["category_id"] in
             cat_id] if cat_id != -1 else [item["image_id"] for item in annotations])
        print("有效文件数量：{}".format(len(valid_image_id)))
        image_id_dict = {one["id"]: one for one in images if one["id"] in valid_image_id}
        cat_id_dict = {one["id"]: one for one in categries}
        anno_dict_list = defaultdict(list)
        for one in annotations:
            one = copy.deepcopy(one)
            one["cat_name"] = cat_id_dict[one["category_id"]]["name"].replace(" ", "_")
            anno_dict_list[one["image_id"]].append(one)
        # categries = [cat["name"] for cat in categries]
        return image_id_dict, cat_id_dict, anno_dict_list, categries

    def coco2voc(self, coco_json, cat_id=-1, object365=False, separate_storing=True, save_path="",
                 database="FoodDection"):
        """

        Args:
            coco_json: coco json标注文件
            cat_id: 类别id,,-1表示提取所有类别，字符串表示某一大类
            object365: object365标注文件
            separate_storing:
            save_path:各个类别是否分别存放
            database:数据库名称

        Returns:

        """
        image_info, cat_info, anno_info, categries = self.read_coco(coco_json, cat_id) if not \
            object365 else self.read_object365(coco_json, cat_id)
        save_path = save_path if save_path else os.path.split(coco_json)[0]
        folder = os.path.split(save_path)[1]
        if type(cat_id) == str and separate_storing and not object365:
            sub_cats = [j["name"].replace(" ", "_") for j in categries if j["supercategory"] == cat_id]
        elif object365:
            sub_cats = [i.replace(" ", "_") for i in read_txt(cat_id, return_list=True)]
        else:
            sub_cats = []
        for image_id, image in image_info.items():
            annos = anno_info[image_id]
            dom = xml.dom.getDOMImplementation()
            doc = dom.createDocument(None, "annotation", None)
            # 创建根节点
            root_node = doc.documentElement
            # folder节点
            self.createChildNode(doc, "folder", folder, root_node)
            # filename节点
            self.createChildNode(doc, "filename", image['file_name'], root_node)
            # path节点
            self.createChildNode(doc, "path", "./" + image["file_name"], root_node)
            # source节点
            source_node = doc.createElement("source")
            # source子节点
            self.createChildNode(doc, "database", database, source_node)
            root_node.appendChild(source_node)
            # size节点
            size_node = doc.createElement("size")
            self.createChildNode(doc, "width", str(image["width"]), size_node)
            self.createChildNode(doc, "height", str(image["height"]), size_node)
            self.createChildNode(doc, "depth", str(image.get("depth", 3)), size_node)
            root_node.appendChild(size_node)
            # segmented节点
            self.createChildNode(doc, "segmented", self.segmented, root_node)
            cat_name = ""
            for one in annos:
                object_node = self.createObjectNode(doc, one)
                root_node.appendChild(object_node)
                if type(cat_id) == str and (one["cat_name"] in sub_cats):
                    cat_name = one["cat_name"].replace(" ", "_")
            # 写入文件
            xml_filename = image["file_name"].strip(".jpg") + ".xml"
            if separate_storing and type(cat_id) == str:
                path = save_path + "/" + cat_name
                if cat_name == "":
                    input("ddd")
                os.makedirs(path, exist_ok=True)
            else:
                path = save_path
            xml_filename = os.path.join(path, xml_filename)
            self.writeXMLFile(doc, xml_filename)


# 以下是测试案例


def test_coco_2_xml():
    t = Coco2Voc()
    t.coco2voc(r"F:\Large_dataset\coco\annonations\instances_val2017.json", cat_id="food")
    t = Coco2Voc()
    t.coco2voc(r"F:\Large_dataset\coco\annonations\instances_train2017.json", cat_id="food")


def object365_coco_2_xml():
    t = Coco2Voc()
    t.coco2voc(r"F:\Large_dataset\Objects365\Annotations\val\val.json", save_path=r"F:\Large_dataset\Objects365\xml",
               object365=True, cat_id=r"F:\Large_dataset\Objects365\food.txt")
    t = Coco2Voc()
    t.coco2voc(r"F:\Large_dataset\Objects365\Annotations\train\train.json", object365=True,
               save_path=r"F:\Large_dataset\Objects365\xml",
               cat_id=r"F:\Large_dataset\Objects365\food.txt")


def image_copy_365():
    t = r"F:\Large_dataset\Objects365\Images\train\train"
    v = r"F:\Large_dataset\Objects365\Images\val\val"
    t_files = file_scanning(t, file_format="jpg|jpeg", full_path=True)
    v_files = file_scanning(v, file_format="jpg|jpeg", full_path=True)
    files = t_files + v_files
    xml_path = r"F:\Large_dataset\Objects365\xml"
    dirs = [d for d in os.listdir(xml_path) if os.path.isdir(xml_path + "/" + d)]
    print(dirs)
    for d in dirs:
        copy_files = [file.replace("xml", "jpg") for file in
                      file_scanning(xml_path + "/" + d, file_format="xml", full_path=False)]
        print(f"{d}:{len(copy_files)}")
        for copy_file in copy_files:
            try:
                shutil.copy(t + "/" + copy_file, f"{xml_path}/{d}/{copy_file}")
            except FileNotFoundError:
                try:
                    shutil.copy(v + "/" + copy_file, f"{xml_path}/{d}/{copy_file}")
                except FileNotFoundError:
                    print("fuck no file")


def image_copy():
    t = r"F:\Large_dataset\coco\2017train"
    v = r"F:\Large_dataset\coco\2017val"
    t_files = file_scanning(t, file_format="jpg|jpeg", full_path=True)
    v_files = file_scanning(v, file_format="jpg|jpeg", full_path=True)
    files = t_files + v_files
    xml_path = r"F:\Large_dataset\coco\annonations"
    dirs = [d for d in os.listdir(xml_path) if os.path.isdir(xml_path + "/" + d)]
    print(dirs)
    for d in dirs:
        copy_files = [file.replace("xml", "jpg") for file in
                      file_scanning(xml_path + "/" + d, file_format="xml", full_path=False)]
        print(f"{d}:{len(copy_files)}")
        for copy_file in copy_files:
            try:
                shutil.copy(t + "/" + copy_file, f"{xml_path}/{d}/{copy_file}")
            except FileNotFoundError:
                try:
                    shutil.copy(v + "/" + copy_file, f"{xml_path}/{d}/{copy_file}")
                except FileNotFoundError:
                    print("fuck no file")


def main():
    get_boximgs(
        r"E:\Programming\Python\8_Ganlanz\food_recognition\dataset\自建数据集\3_公开数据集抽取\原始标注文件\hamburger\n07697313_13461.JPEG",
        r"E:\Programming\Python\8_Ganlanz\food_recognition\dataset\自建数据集\3_公开数据集抽取\原始标注文件\hamburger\n07697313_13461.xml")


if __name__ == '__main__':
    main()
