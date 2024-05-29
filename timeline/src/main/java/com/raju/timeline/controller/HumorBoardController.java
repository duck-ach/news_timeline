package com.raju.timeline.controller;

import com.raju.timeline.service.HumorBoardService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HumorBoardController {

    private final HumorBoardService humorBoardService;

    @Autowired
    public HumorBoardController(HumorBoardService humorBoardService) {
        this.humorBoardService = humorBoardService;
    }

    @PostMapping("/api/humor/add")
    public void add(HttpServletRequest request, HttpServletResponse response) {
        humorBoardService.addHumorBoard(request, response);
    }

}
