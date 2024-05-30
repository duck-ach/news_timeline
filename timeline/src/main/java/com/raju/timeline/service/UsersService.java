package com.raju.timeline.service;

import com.raju.timeline.domain.UsersDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.HashMap;
import java.util.Map;

public interface UsersService {
    public void save(HttpServletRequest request, HttpServletResponse response);
    public void login(HttpServletRequest request, HttpServletResponse response);
    public void keepLogin(HttpServletRequest request, HttpServletResponse response);
    public Map<String, Object> isReduceId(Map<String, Object> map);
    public Map<String, Object> checkReduceNick(Map<String, Object> map);
    public void logout(HttpServletRequest request, HttpServletResponse response);
    public Map<String, Object> usersInfo(HttpServletRequest request, HttpServletResponse response);

}
