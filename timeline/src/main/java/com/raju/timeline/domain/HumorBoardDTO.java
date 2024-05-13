package com.raju.timeline.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class HumorBoardDTO {
    private int humorId;
    private String title;
    private String content;
    private Date createDate;
    private int hit;
    private int state;
    private String ip;
    private Date modifyDate;
    private UsersDTO userID;
}
