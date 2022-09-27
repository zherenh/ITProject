package com.project.project_backend.service.impl;

import com.project.project_backend.mapper.FileMapper;
import com.project.project_backend.pojo.File;
import com.project.project_backend.service.FileService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FileServiceImpl implements FileService {
    @Autowired
    FileMapper fileMapper;
    @Override
    public List<File> getAllFile() {
        return fileMapper.getAllFile();
    }

    @Override
    public List<String> getLinkByLike(String linkName) {
        return fileMapper.getLinkByLike(linkName);
    }

    @Override
    public List<String> getLinkByLabelName(String labelName) {
        return fileMapper.getLinkByLabelName(labelName);
    }
}
