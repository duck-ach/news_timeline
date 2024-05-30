package com.raju.timeline.service;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.util.Map;

public interface CaptchaService {
    public void getCaptchaKey();
    public String get(String apiUrl, Map<String, String> requestHeaders);
    public HttpURLConnection connect(String apiUrl);
    public String getImage(InputStream is);
    public String error(InputStream body);
}
