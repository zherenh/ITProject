package com.project.project_backend.service;

import com.project.project_backend.pojo.File;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FileService {
    //获取所有的文件名
    List<File> getAllFile();

    //模糊查询所有的link名
    List<String> getLinkByLike(@Param("linkName")String linkName);

    //根据label_name搜索link
    List<String> getLinkByLabelName(@Param("labelName") String labelName);


}
