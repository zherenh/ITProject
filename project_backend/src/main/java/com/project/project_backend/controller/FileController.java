package com.project.project_backend.controller;

import com.alibaba.fastjson.JSONObject;
import com.project.project_backend.pojo.File;
import com.project.project_backend.pojo.Label;
import com.project.project_backend.service.FileService;
import com.project.project_backend.service.LabelService;
import com.project.project_backend.service.impl.FileServiceImpl;
//import com.sun.xml.internal.ws.developer.StreamingAttachment;
//import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Api("文件处理接口")
@RestController
@RequestMapping("/file")
public class FileController {
    @Autowired
    FileService fileService;

    @Autowired
    LabelService labelService;

    @ApiOperation("获取所有文件")
    @GetMapping("/getAllFile")
    public Object getAllFile() {
        List<File> allFile = fileService.getAllFile();
        Object result = JSONObject.toJSON(allFile);
        System.out.println(result);
        return result;
    }
//    @ApiOperation("更新文件")
//    @RequestMapping("/updateFile")
//    public File updateFile(int id) {
//        File file = fileService.getFileById(id);
//        return file;
//    }
    @ApiOperation("删除文件")
    @ApiParam(name ="id",value = "需要删除的id",required = true)
    @GetMapping("/deleteFileById")
    public int deleteFileById(int id) {
        int i = fileService.deleteFileById(id);
        if(i>0){
            return 1;
        }else {
            return 0;
        }
    }
    @ApiOperation("添加文件")
    @GetMapping("/addFile")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "linkName",value = "链接名称",required = true,dataType = "string"),
            @ApiImplicitParam(name = "link",value = "链接地址",required = true,dataType = "string"),
            @ApiImplicitParam(name = "desc",value = "描述",required = true,dataType = "string"),
            @ApiImplicitParam(name = "label",value = "标签",required = true,dataType = "string"),
    })
    public int addFile(@RequestParam("linkName") String linkName, @RequestParam("link") String link, @RequestParam("desc") String desc, @RequestParam("label") String label) {
        Date createDate = new Date();
        String[] labels = label.split(";");

        System.out.println(labels);
        List<String> linkByLike = fileService.getLinkByLike(linkName);
        File file = new File(linkName, link, createDate, desc);
        if (linkByLike.size() != 0) {
            return 2;
        } else {
            int i = fileService.addFile(file);
            if (i > 0) {
                int linkId = fileService.getFileIdByLinkName(linkName);
                for (String labelName : labels) {
                    int l = labelService.addLabel(new Label(labelName, linkId));
                    if (!(l > 0)) {
                        return 0;
                    }
                }
                return 1;
            } else {
                return 0;
            }
        }

    }

    @ApiOperation("根据标签查找链接")
    @GetMapping("/searchLinkByLabels")
    @ApiParam(name ="labelName",value = "查找指定标签下的链接",required = true)
    public String searchLinkByLabels(@Param("labelName") String labelName) {
        List<String> link = fileService.getLinkByLabelName(labelName);
        String links = JSONObject.toJSONString(link);
        System.out.println("links=>" + links);
        return links;
    }
    @ApiOperation("查找文件id")
    @GetMapping("/searchFileId")
    @ApiParam(name ="labelName",value = "根据id查找链接",required = true)
    public String searchFileId(@Param("id") int id) {
        File fileById = fileService.getFileById(id);
        String file = JSONObject.toJSONString(fileById);
        System.out.println("files=>" + file);
        return file;
    }
    @ApiOperation("根据标签查找链接")
    @GetMapping("/updateFile")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "linkName",value = "链接名称",required = true,dataType = "string"),
            @ApiImplicitParam(name = "link",value = "链接地址",required = true,dataType = "string"),
            @ApiImplicitParam(name = "desc",value = "描述",required = true,dataType = "string"),
            @ApiImplicitParam(name = "label",value = "标签",required = true,dataType = "string"),
            @ApiImplicitParam(name = "id",value = "linkId",required = true,dataType = "int")
    })
    public int updateFile(@RequestParam("linkName") String linkName, @RequestParam("link") String link, @RequestParam("desc") String desc, @RequestParam("label") String label, @RequestParam("id") int id) {
        Date createDate = new Date();
        HashMap<String, Object> fileMap = new HashMap<>();
        fileMap.put("linkName", linkName);
        fileMap.put("link", link);
        fileMap.put("createDate", createDate);
        fileMap.put("desc", desc);
        fileMap.put("id", id);
        String[] labels = label.split(";");
        int i1 = fileService.updateFile(fileMap);
        int i3 = labelService.deleteLabelById(id);
        if (i3 > 0) {
            for (String s : labels) {
                int i2 = labelService.addLabel(new Label(s, id));
                if (!(i2 > 0)) {
                    return 0;
                }
            }
        } else {
            return 0;
        }

        if (!(i1 > 0)) {
            return 0;
        }
        return 1;

    }


}
