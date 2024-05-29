import { useEffect, useState } from "react";
import styled from "./Login.module.css";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./Header";
function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  let { from } = useLocation();
  //const { from } = location.state || { from: "/" };

  console.log(from);

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 제출동작 방지용

    if (!id || !pw) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("pw", pw);

    fetch(`/api/users/login`, {
      // URL 파라미터 추가
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("서버 오류가 발생했습니다.");
        }
        return response.text();
      })
      .then((data) => {
        console.log("서버 응답 ", data);
        alert("어서오세요! 기다리고 있었어요!");
        // window.location.href = previousPath; // previousPath로 리디렉션
        // 로그인 성공 시 이전 페이지로 이동
        // const { state } = location;
        // const from = state ? state.from : "/";
        // console.log(historys);
        // history.push(from);
        // navigate(from);
      })
      .catch((error) => {
        alert("서버 응답 형식이 잘못되었습니다.");

        alert(error.message);
      });
  };

  return (
    <div className={styled.wrap}>
      <h2>로그인</h2>
      <div className={styled.login_wrap}>
        <form className={styled.login_from} onSubmit={handleSubmit}>
          <div className={styled.text_input_area}>
            <input
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="이메일 또는 휴대폰 번호"
            />
          </div>
          <div className={styled.text_input_area}>
            <input
              name="pw"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호"
            />
          </div>
          <div className={styled.loginCheck}>
            <input type="checkBox" />
            <span>로그인 상태 유지</span>
          </div>
          <button className={styled.login_btn} type="submit">
            로그인
          </button>
        </form>
        <div className={styled.join_find_box}>
          <ul>
            <li>
              <a href="/Join">회원가입</a>
            </li>
            <li>
              <p>/</p>
            </li>
            <li>
              <a href="">계정 찾기</a>
            </li>
          </ul>
        </div>

        <div className={styled.join_find_box}>
          <ul>
            <li>
              <a href="">카카오이미지</a>
            </li>
            <li>
              <a href="">네이버이미지</a>
            </li>
            <li>
              <a href="">구글 이미지</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
