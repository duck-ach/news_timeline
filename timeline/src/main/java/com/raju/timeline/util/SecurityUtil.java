package com.raju.timeline.util;

import org.springframework.stereotype.Component;

import java.security.MessageDigest;

@Component
public class SecurityUtil {
    public String preventXSS(String str) {
        str = str.replace("<", "&lt;");
        str = str.replace(">", "&gt;");
        str = str.replace("\"", "&quot;");
        str = str.replace("\'", "&#x27;");
        return str;
    }

    public String sha256(String str) {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("SHA-256");
            md.update(str.getBytes());
        } catch(Exception e) {
            e.printStackTrace();
        }
        byte[] b = md.digest();  // 배열 b : 문자열 str이 암호화된 32바이트 크기의 배열
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < b.length; i++) {
            sb.append(String.format("%2X", b[i]));  // %2X (2자리 16진수(0~F)), %2x (2자리 16진수(0~f))
        }
        return sb.toString();
    }
}
