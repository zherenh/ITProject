package com.project.project_backend.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Label {
    private int lid;
    private String labelName;
    private int linkId;

    public Label(String labelName, int linkId) {
        this.labelName = labelName;
        this.linkId = linkId;
    }
}
