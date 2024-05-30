package com.raju.timeline.controller;

import com.raju.timeline.service.CaptchaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CaptchaController {

    @Autowired
    private CaptchaService captchaService;

    @GetMapping("/api/captcha/getKey")
    public void getCaptchaKey() {
        captchaService.getCaptchaKey();
    }

}
