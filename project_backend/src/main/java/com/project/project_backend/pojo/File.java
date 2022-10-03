package com.project.project_backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class File {
    private int id;
    private String linkName;
    private String link;
    private List<Label> labels;
    private Date createDate;
    private String desc;

    public File(String linkName, String link, List<Label> labels, String desc) {
        this.linkName = linkName;
        this.link = link;
        this.labels = labels;
        this.desc = desc;
    }

    public File(String linkName, String link, Date createDate, String desc) {
        this.linkName = linkName;
        this.link = link;
        this.createDate = createDate;
        this.desc = desc;
    }

    public File(int id, String linkName, String link, Date createDate, String desc) {
        this.id = id;
        this.linkName = linkName;
        this.link = link;
        this.createDate = createDate;
        this.desc = desc;
    }

    public File(String linkName, String link, List<Label> labels, Date createDate, String desc) {
        this.linkName = linkName;
        this.link = link;
        this.labels = labels;
        this.createDate = createDate;
        this.desc = desc;
    }
}
