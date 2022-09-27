package com.project.project_backend;

import com.project.project_backend.controller.LabelController;
import com.project.project_backend.controller.MainController;
import com.project.project_backend.mapper.FileMapper;
import com.project.project_backend.mapper.LabelMapper;
import com.project.project_backend.pojo.File;
import com.project.project_backend.pojo.Label;
import com.project.project_backend.service.FileService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sun.applet.Main;

import java.util.List;
import java.util.Map;

@SpringBootTest
class ProjectBackendApplicationTests {

    @Autowired
    FileService fileService;
    @Autowired
    LabelMapper labelMapper;
    @Autowired
    FileMapper fileMapper;
    @Autowired
    MainController mainController;
@Autowired
    LabelController labelController;
    @Test
    void contextLoads() {
//        List<String> linkByLabelName = fileMapper.getLinkByLabelName("%文%");
//        System.out.println(linkByLabelName);
//        List<String> labelByLink = labelMapper.getLabelByLink("%h%");
//        System.out.println(
//                labelByLink
//        );
//        List<Map<String, List>> mapList = mainController.researchLinkOrLabelByLike("");
//        System.out.println(mapList);
//        List<Map<String, Object>> maps = mainController.researchLinkOrLabelByLike("文");
//        System.out.println(maps);
        String byLike = labelController.getLabelByLike("文");
        System.out.println(byLike);
    }

}
