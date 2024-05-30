package com.raju.timeline.controller;

import com.raju.timeline.service.HumorBoardService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HumorBoardController {

    private final HumorBoardService humorBoardService;

    @Autowired
    public HumorBoardController(HumorBoardService humorBoardService) {
        this.humorBoardService = humorBoardService;
    }

    @ResponseBody
    @PostMapping("/api/humor/tmpSave")
    public void tmpSave(HttpServletRequest request, HttpServletResponse response) {

    }

    @PostMapping("/api/humor/Save")
    public void save(HttpServletRequest request, HttpServletResponse response) {
        humorBoardService.saveHumorBoard(request, response);
    }

}
