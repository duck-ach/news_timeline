package com.raju.timeline.domain;

import lombok.*;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UsersDTO {

    private int userId;
    private String id;
    private String nickname;
    private String pw;
    private String gender;
    private String birthday;
    private int agreeCode;
    private String snsType;
    private Date joinDate;
    private Date pwModifyDate;
    private String sessionId;
    private Date sessionLimitDate;
    private int bannedState;
}

