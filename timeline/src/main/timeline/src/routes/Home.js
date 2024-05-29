import Axios from "axios"; // 중괄호 제거
import { useEffect, useState } from "react";
import styled from "./Home.module.css";

function Home() {
  const [tabs, setTab] = useState([]);

  // useEffect(() => {
  //   fetchTab();
  // }, []);

  const [query, setQuery] = useState("스포츠"); // 초기값 "스포츠"로 설정

  // const fetchTab = async () => {
  //   try {
  //     const response = await Axios.get(
  //       `http://localhost:8080/api_test?query=${query}`
  //     );
  //     // 실제 응답의 구조에 따라 데이터에 접근하여 상태에 저장
  //     //setTab(response.data.items); // 예시: response.data.items
  //     setTab(response.data.items);
  //     console.log(news);
  //     //  console.log(response.data);
  //   } catch (error) {
  //     console.error("에러 발생:", error);
  //   }
  // };
  // console.table(tabs);
  return (
    <div className={styled.wrap}>
      Home
      <div className={styled.home_wrap}>
        <div className={styled.content_box}>
          <ul>
            {/* tabs 데이터를 반복하여 출력 */}
            {/* {tabs.map((item, index) => (
              <li key={index}>
                <div className={styled.box_line}>
                  <p className={styled.box_img}>
                    <img src={item.thumbnail} alt="섬네일" />
                  </p>
                  <span className={styled.box_underLine}></span>
                  <p className={styled.box_title}>{item.title}</p>
                  <p className={styled.box_text}>{item.content}</p>
                </div>
                <div className={styled.box_under_text}>
                  <div className={styled.box_under_text_left}>
                    {item.publisher}
                  </div>
                  <div className={styled.box_under_text_right}>
                    {item.viewCount}회
                  </div>
                </div>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
