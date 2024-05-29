package com.raju.timeline.mapper;

import com.raju.timeline.domain.UsersDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface UsersMapper {
    public int insertUsers(UsersDTO user);
    public UsersDTO selectUserByMap(Map<String, Object> userMap);
    public int updateSessionInfo(UsersDTO user);
}
