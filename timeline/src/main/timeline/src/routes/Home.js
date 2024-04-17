import { Axios } from "axios";
import { useEffect, useState } from "react";

import styled from "./Home.module.css";

function Home() {
  //   const [tabs, setTab] = useState([]);

  //   useEffect(() => {
  //     fetchTab();
  //   }, []);

  //   const fetchTab = async () => {
  //     try {
  //       const response = await Axios.get(""); // 데이터 불러올 경로
  //       setTab(response.tabs); // 불러온 데이터를 유즈스테이트  상태에 저장
  //     } catch (error) {
  //       console.error("왜 안되는것이지...?", error);
  //     }
  //   };

  return (
    <div className={styled.wrap}>
      Home
      <div className={styled.home_wrap}>
        <div className={styled.content_tab}>
          <ul>
            {/* 디비데이터의  필터만큼 반복*/}
            {/* {tabs.map((item, index) => (
              <li key={index}> {item.columName} </li>
            ))} */}
          </ul>
        </div>

        <div className={styled.content_box}>
          <ul>
            <li>
              <div className={styled.box_line}>
                <p className={styled.box_img}>
                  <img src="" alt="섬네일" />
                </p>
                <spna className={styled.box_underLine}></spna>
                <p className={styled.box_title}>타이틀</p>
                <p className={styled.box_text}>내용</p>
              </div>
              <div className={styled.box_under_text}>
                <div className={styled.box_under_text_left}>조선일보</div>
                <div className={styled.box_under_text_right}>2123,12회</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
