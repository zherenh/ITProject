package com.project.project_backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class File {
    private int id;
    private String link;
    private List<Label> labels;
    private Date createDate;
    private String desc;
}
