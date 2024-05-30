package com.raju.timeline.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface HumorBoardService {
    public void tmpSaveHumorBoard(HttpServletRequest request, HttpServletResponse response);
    public void saveHumorBoard(HttpServletRequest request, HttpServletResponse response);
}
