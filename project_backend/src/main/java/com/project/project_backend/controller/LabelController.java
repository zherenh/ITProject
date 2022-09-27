package com.project.project_backend.controller;

import com.alibaba.fastjson.JSON;
import com.project.project_backend.pojo.File;
import com.project.project_backend.pojo.Label;
import com.project.project_backend.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/label")
public class LabelController {
    @Autowired
    LabelService labelService;


    @RequestMapping("/getLabelByLike")
    public String getLabelByLike(String keywords) {
        List<String> labels = labelService.getLabelByLike("%"+keywords+"%");
        return JSON.toJSONString(labels);
    }


//
//    @RequestMapping("/getLinkByLabelName")
//    public List<File> getLinkByLabelName(String labeName) {
//        List<File> linkByLabelName = fileService.getLinkByLabelName(labeName);
//        return linkByLabelName;
//    }

}
