package com.raju.timeline.util;

import org.springframework.stereotype.Component;

@Component
public class SecurityUtil {
    public String preventXSS(String str) {
        str = str.replace("<", "&lt;");
        str = str.replace(">", "&gt;");
        str = str.replace("\"", "&quot;");
        str = str.replace("\'", "&#x27;");
        return str;
    }
}
