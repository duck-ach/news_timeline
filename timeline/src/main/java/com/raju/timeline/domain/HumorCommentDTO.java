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
public class HumorCommentDTO {
    private int humorCoId;
    private String coContent;
    private Date coCreateDate;
    private int state;
    private int depth;
    private int groupNo;
    private int groupOrder;
    private HumorBoardDTO humorId;
    private UsersDTO userId;
}
