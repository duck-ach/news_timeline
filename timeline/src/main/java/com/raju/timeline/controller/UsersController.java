package com.raju.timeline.controller;

import com.raju.timeline.service.UsersService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UsersController {

    private final UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    // 회원가입
    @PostMapping("/api/users/save")
    public void usersSave(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("가입 컨트롤러 들어옴");
        usersService.save(request, response);
    }

    // 아이디 중복 체크
    @ResponseBody // 비동기 처리
    @GetMapping(value="/api/users/checkReduceId", produces= MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> checkReduceId(@RequestParam(value = "id", required = false, defaultValue = "") String id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", id);
        System.out.println("map = " + map);
        System.out.println("result = " + usersService.isReduceId(map));
        return usersService.isReduceId(map);
    }

    // 닉네임 중복 체크
    @ResponseBody // 비동기 처리
    @GetMapping(value="/api/users/checkReduceNickname", produces= MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> checkReduceNick(@RequestParam(value = "nickname", required = false, defaultValue = "") String nickname) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("nickname", nickname);
        System.out.println("map = " + map);
        System.out.println("result = " + usersService.checkReduceNick(map));
        return usersService.checkReduceNick(map);
    }

    // 로그인
    @PostMapping("/api/users/login")
    public void usersLogin(HttpServletRequest request, HttpServletResponse response) {
        usersService.login(request, response);
    }

    // 로그아웃
    @GetMapping("/api/users/logout")
    public void usersLogout(HttpServletRequest request, HttpServletResponse response) {
        usersService.logout(request, response);
    }

    // 회원 정보 조회
    @ResponseBody // 비동기 처리
    @GetMapping(value="/api/users/info", produces= MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> usersInfo(HttpServletRequest request, HttpServletResponse response) {
        return usersService.usersInfo(request, response);
    }
}