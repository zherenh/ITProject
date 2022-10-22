package com.project.project_backend.controller;

import com.alibaba.fastjson.JSONObject;
import com.project.project_backend.pojo.File;
import com.project.project_backend.service.FileService;
import com.project.project_backend.service.impl.LabelServiceImpl;
//import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class MainController {
    @Autowired
    FileService fileService;
    @Autowired
    LabelServiceImpl labelServiceImpl;

    @ApiOperation("查询所有链接及标签")
    @GetMapping("/research")
    @ApiParam(name ="keyword",value = "通过关键字产模糊查询标签及链接",required = true)
    public List<Map<String, Object>> researchLinkOrLabelByLike(String keywords) {
        ArrayList<Map<String, Object>> result = new ArrayList<>();
        HashMap<String, Object> linkLists = new HashMap<>();
        HashMap<String, Object> labelLists = new HashMap<>();
        List<String> labelsByLink = new ArrayList<>();
        List<String> linksByLabel = new ArrayList<>();
        List<String> links = fileService.getLinkByLike("%" + keywords + "%");
        List<String> labels = labelServiceImpl.getLabelByLike("%" + keywords + "%");
        if (links.size() != 0) {
            for (String link : links) {
                for (String s : labelServiceImpl.getLabelByLink(link)) {
                    labelsByLink.add(s);
                }
            }
            linkLists.put("links", links);
            labelLists.put("labels", labelsByLink);

        }

        if (labels.size() != 0) {
            for (String label : labels) {
                for (File s : fileService.getLinkByLabelName(label)) {
                    linksByLabel.add(s.getLink());
                }
            }

            LinkedHashSet<String> tempLinksByLabel = new LinkedHashSet<>(linksByLabel);
            ArrayList<String> linksByLabels = new ArrayList<>(tempLinksByLabel);
            linkLists.put("links",linksByLabels);
            labelLists.put("labels", labels);
        }
        JSONObject linkList = new JSONObject(linkLists);
        JSONObject labelList = new JSONObject(labelLists);
        result.add(linkList);
        result.add(labelList);
        return result;
    }

}
