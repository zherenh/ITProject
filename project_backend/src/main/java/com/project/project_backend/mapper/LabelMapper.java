package com.project.project_backend.mapper;

import com.project.project_backend.pojo.Label;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LabelMapper {

    //查询所有标签
    List<String> getAllLabel();

    //根据标签名模糊查询
    List<String> getLabelByLike(@Param("labelName") String labelName);

    //根据link搜索label名字
    List<String> getLabelByLink(@Param("link")String link);
}
