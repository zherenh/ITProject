package com.project.project_backend.controller;
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
public class testController {
    @Autowired
    FileService fileService;
    @Autowired
    LabelService labelService;

    @RequestMapping("/research45")
    public List<Map<String, Object>> researchLinkOrLabelByLike(String keywords) {
        List<String> linkByLike = fileService.getLinkByLike("%" + keywords + "%");
        List<String> labelByLike = labelService.getLabelByLike("%" + keywords + "%");
return null;
    }
}
