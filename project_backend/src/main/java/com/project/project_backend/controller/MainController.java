package com.project.project_backend.controller;

import com.alibaba.fastjson.JSONObject;
import com.project.project_backend.service.FileService;
import com.project.project_backend.service.impl.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class MainController {
    @Autowired
    FileService fileService;
    @Autowired
    LabelService labelService;

    @RequestMapping("/research")
    public List<Map<String, Object>> researchLinkOrLabelByLike(String keywords) {
        System.out.println("keywords" + keywords);
        ArrayList<Map<String, Object>> result = new ArrayList<>();
        HashMap<String, Object> linkLists = new HashMap<>();
        HashMap<String, Object> labelLists = new HashMap<>();
        List<String> labelsByLink = new ArrayList<>();
        List<String> linksByLabel = new ArrayList<>();
        List<String> links = fileService.getLinkByLike("%" + keywords + "%");
        List<String> labels = labelService.getLabelByLike("%" + keywords + "%");
        System.out.println("links=>" + links == null);
        System.out.println("labels=>" + labels == null);
        if (links.size() != 0) {
            for (String link : links) {
                for (String s : labelService.getLabelByLink(link)) {
                    labelsByLink.add(s);
                }
            }
            linkLists.put("links", links);
            labelLists.put("labels", labelsByLink);
            System.out.println("linklists=>" + linkLists);
            System.out.println("labellists=>" + labelLists);
        }
        if (labels.size() != 0) {
            for (String label : labels) {
                for (String s : fileService.getLinkByLabelName(label)) {
                    linksByLabel.add(s);
                }
            }
            linkLists.put("links", linksByLabel);
            labelLists.put("labels", labels);
        }
        JSONObject linkList = new JSONObject(linkLists);
        JSONObject labelList = new JSONObject(labelLists);
        result.add(linkList);
        result.add(labelList);
        return result;
    }
//    @RequestMapping("/research")
//    public List<Map<String, Object>> researchLinkOrLabelByLike(String keywords) {
//        System.out.println("keywords" + keywords);
//        ArrayList<Map<String, Object>> result = new ArrayList<>();
//        HashMap<String, Object> linkLists = new HashMap<>();
//        HashMap<String, Object> labelLists = new HashMap<>();
//        List<String> labelsByLink = new ArrayList<>();
//        List<String> linksByLabel = new ArrayList<>();
//
//        if (keywords != "") {
//            List<String> links = fileService.getLinkByLike("%" + keywords + "%");
//            List<String> labels = labelService.getLabelByLike("%" + keywords + "%");
//            System.out.println("links=>" + links == null);
//            System.out.println("labels=>" + labels == null);
//            if (links.size() != 0) {
//                for (String link : links) {
//                    for (String s : labelService.getLabelByLink(link)) {
//                        labelsByLink.add(s);
//                    }
//                }
//                linkLists.put("links", links);
//                labelLists.put("labels", labelsByLink);
//                System.out.println("linklists=>" + linkLists);
//                System.out.println("labellists=>" + labelLists);
//            }
//            if (labels.size() != 0) {
//                for (String label : labels) {
//                    for (String s : fileService.getLinkByLabelName(label)) {
//                        linksByLabel.add(s);
//                    }
//                }
//                linkLists.put("links", linksByLabel);
//                labelLists.put("labels", labels);
//            }
//
//        } else {
//            List<String> links = fileService.getLinkByLike("%%");
//            List<String> labels = labelService.getLabelByLike("%%");
//            linkLists.put("links", links);
//            labelLists.put("labels", labels);
////            return null;
//        }
//        JSONObject linkList = new JSONObject(linkLists);
//        JSONObject labelList = new JSONObject(labelLists);
//        result.add(linkList);
//        result.add(labelList);
//        return result;
//    }
}
