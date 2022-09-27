package com.project.project_backend.mapper;

import com.project.project_backend.pojo.File;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
public interface FileMapper {
    //获取所有的文件名
    List<File> getAllFile();

    //模糊查询所有的link名
    List<String> getLinkByLike(@Param("linkeName")String linkeName);

    //根据label_name搜索link
    List<String> getLinkByLabelName(@Param("labelName") String labelName);

}
