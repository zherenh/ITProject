package com.project.project_backend;

import com.project.project_backend.controller.FileController;
import com.project.project_backend.controller.MainController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class demo {

    @Autowired
    FileController fileController;

@Test
    public void test(){
    String baidu = fileController.searchLinkByLabels("search");
    System.out.println(baidu);
}
}
