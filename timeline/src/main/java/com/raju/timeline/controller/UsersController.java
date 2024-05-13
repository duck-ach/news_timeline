package com.raju.timeline.controller;

import com.raju.timeline.service.UsersService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.awt.*;
import java.util.HashMap;
import java.util.Map;

@Controller
public class UsersController {

    @Autowired
    private UsersService usersService;

    // 회원가입
    @PostMapping("/users/save")
    public void usersSave(HttpServletRequest request, HttpServletResponse response) {
        usersService.save(request, response);
    }

    // 아이디 중복 체크
    @ResponseBody // 비동기 처리
    @GetMapping(value="/users/checkReduceId", produces= MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> checkReduceId(String id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", id);
        return usersService.isReduceId(map);
    }

    // 닉네임 중복 체크
    @ResponseBody // 비동기 처리
    @GetMapping(value="/users/checkReduceNick", produces= MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> checkReduceNick(String nickname) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("nickname", nickname);
        return usersService.checkReduceNick(map);
    }

    // 로그인
    @PostMapping("/users/login")
    public void usersLogin(HttpServletRequest request, HttpServletResponse response) {
        usersService.login(request, response);
    }
}
