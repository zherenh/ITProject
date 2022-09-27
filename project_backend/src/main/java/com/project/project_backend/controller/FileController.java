package com.project.project_backend.controller;

import com.project.project_backend.pojo.File;
import com.project.project_backend.pojo.Label;
import com.project.project_backend.service.FileService;
import com.project.project_backend.service.impl.FileServiceImpl;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/file")
public class FileController {
    @Autowired
    FileService fileService;




    @RequestMapping("/getAllFile")
    public List<File> getAllFile() {
        List<File> allFile = fileService.getAllFile();
        return allFile;
    }

//    @RequestMapping("/getAllLink")
//    public List<String> getAllLink() {
//        List<String> allLink = fileService.getLinkByLike();
//        return allLink;
//    }

//    @RequestMapping("/getLinkByLabelName")
//    public List<File> getLinkByLabelName(String labeName) {
//        List<File> linkByLabelName = fileService.getLinkByLabelName(labeName);
//        return linkByLabelName;
//    }

}
