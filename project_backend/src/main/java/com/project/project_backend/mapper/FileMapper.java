package com.project.project_backend.mapper;

import com.project.project_backend.pojo.File;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
public interface FileMapper {
    //获取所有的文件名
    List<File> getAllFile();

    //模糊查询所有的link名
    List<String> getLinkByLike(@Param("linkeName")String linkeName);

    //根据label_name搜索link
    List<String> getLinkByLabelName(@Param("labelName") String labelName);

    //根据id删除file
    int deleteFileById(@Param("id")Integer id);

   //添加file
    int  addFile(File file);

    //通过id查找file
    File getFileById(Integer id);

    //根据id修改file
    int updateFile(Map<String,Object> map);

    //根据linkName查找
    int getFileIdByLinkName(@Param("linkName")String linkName);
}
