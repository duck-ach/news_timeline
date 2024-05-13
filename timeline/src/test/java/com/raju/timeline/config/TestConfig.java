package com.raju.timeline.config;

import com.raju.timeline.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.raju.timeline")
public class TestConfig {
    @Autowired
    private SecurityUtil securityUtil;
}
