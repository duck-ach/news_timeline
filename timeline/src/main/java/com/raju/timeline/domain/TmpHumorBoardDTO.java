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
public class TmpHumorBoardDTO {
    private int tmpHumorId;
    private String title;
    private String content;
    private Date saveDate;
    private UsersDTO userid;
}
