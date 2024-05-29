package com.raju.timeline.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ImgDTO {
    private int imgId;
    private String filesystem;
    private HumorBoardDTO humorId;
}
