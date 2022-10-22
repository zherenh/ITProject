package com.project.project_backend;

import com.project.project_backend.controller.FileController;
import com.project.project_backend.controller.LabelController;
import com.project.project_backend.controller.MainController;
import com.project.project_backend.mapper.FileMapper;
import com.project.project_backend.mapper.LabelMapper;
import com.project.project_backend.pojo.File;
import com.project.project_backend.pojo.Label;
import com.project.project_backend.service.FileService;
import javafx.beans.binding.ObjectExpression;
import org.assertj.core.util.DateUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import sun.applet.Main;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

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
    @Autowired
    FileController fileController;
    @Test
    void contextLoads() throws ParseException {
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
//        List<File> allFile = fileController.getAllFile();
//        Date date = new Date();
//        System.out.println(date);
//      fileController.addFile("zhzhz", "http:fef", "好", "fe;fxlf;fef");
//        List<File> allFile = fileMapper.getAllFile();
//        System.out.println(allFile);
//        int haolo = fileController.updateFile("10.4", "http:2222", "nihaa", "qw1;qw2;qw3;qw4", 1);
//        System.out.println(haolo);
//        HashMap<String, Object> fileMap = new HashMap<>();
//        fileMap.put("linkName", "fefxxxxxx");
//        fileMap.put("link", "http:2389hjh");
//        fileMap.put("createDate", "2022-10-02 12:01:34");
//        fileMap.put("desc", "23xs");
//        fileMap.put("id", 2);
//        fileMapper.updateFile(fileMap);
//        List<String> linkByLabelName = fileMapper.getLinkByLabelName("%%");
//        System.out.println(linkByLabelName);
//        ArrayList<String> list1 = new ArrayList<>();
//        list1.add("fds1");
//        list1.add("fds1");
//        list1.add("fds2");
//        list1.add("fds3");
//        list1.add("fds4");
//        LinkedHashSet<String> hashSet = new LinkedHashSet<>(list1);
//        ArrayList<String> list2 = new ArrayList<>(hashSet);
//        System.out.println(list2);
        List<Map<String, Object>> d = mainController.researchLinkOrLabelByLike("d");

    }


}
