package com.project.project_backend.service;

import com.project.project_backend.pojo.Label;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface LabelService {


    //查询所有标签
    List<String> getAllLabel();

    //根据标签名模糊查询
    List<String> getLabelByLike(@Param("labelName") String labelName);

    //根据link搜索label名字
    List<String> getLabelByLink(@Param("link")String link);

    //添加label
    int addLabel(Label label);


    //根据id删除label
    int deleteLabelById(int linkId);

    //根据linkId查找lid
    List<Integer> getLidByLinkId(Integer linkId);
}
