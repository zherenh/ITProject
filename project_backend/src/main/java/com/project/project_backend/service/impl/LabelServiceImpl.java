package com.project.project_backend.service.impl;

import com.project.project_backend.mapper.LabelMapper;
import com.project.project_backend.pojo.Label;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabelServiceImpl implements com.project.project_backend.service.LabelService {
    @Autowired
    LabelMapper labelMapper;

    @Override
    public List<String> getAllLabel() {
        return labelMapper.getAllLabel();
    }
    @Override
    public List<String> getLabelByLike(String labelName) {
        return labelMapper.getLabelByLike(labelName);
    }

    @Override
    public List<String> getLabelByLink(String link) {
        return labelMapper.getLabelByLink(link);
    }

    @Override
    public int addLabel(Label label) {
        return labelMapper.addLabel(label);
    }

    @Override
    public int deleteLabelById(int linkId) {
        return labelMapper.deleteLabelById(linkId);
    }

    @Override
    public List<Integer> getLidByLinkId(Integer linkId) {
        return labelMapper.getLidByLinkId(linkId);
    }
}
