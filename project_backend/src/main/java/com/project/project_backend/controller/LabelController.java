package com.project.project_backend.controller;

import com.alibaba.fastjson.JSON;
import com.project.project_backend.pojo.File;
import com.project.project_backend.pojo.Label;
import com.project.project_backend.service.LabelService;
//import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/label")
public class LabelController {
    @Autowired
    LabelService labelService;

    @ApiOperation("模糊查询链接")
    @GetMapping("/getLabelByLike")
    @ApiParam(name ="keyword",value = "通过关键字产模糊查询标签",required = true)
    public String getLabelByLike(String keywords) {
        List<String> labels = labelService.getLabelByLike("%"+keywords+"%");
        return JSON.toJSONString(labels);
    }



}
