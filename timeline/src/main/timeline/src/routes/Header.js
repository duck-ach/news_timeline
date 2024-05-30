import { Link, useNavigate, useLocation } from "react-router-dom"; // useNavigate
import style from "./Header.module.css";

import Home from "./Home";
import { useEffect, useState } from "react";
// 쿠키를 읽어 파싱하는 함수
// function parseCookies() {
//   const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
//   const cookieMap = {};
//   cookies.forEach((cookie) => {
//     const [name, value] = cookie.split("=");
//     cookieMap[name] = value;
//     console.table(cookieMap);
//   });
//   return cookieMap;
// }

function getCookie(name) {
  // 모든 쿠키 문자열을 가져옵니다.
  let cookieString = document.cookie;

  // 쿠키 문자열을 세미콜론으로 분리하여 배열로 만듭니다.
  let cookies = cookieString.split("; ");

  // 배열을 순회하며 원하는 쿠키를 찾습니다.
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    // 쿠키를 "키=값" 형태로 분리합니다.
    let [cookieName, cookieValue] = cookie.split("=");

    // 원하는 쿠키 이름과 일치하는지 확인합니다.
    if (cookieName === name) {
      // 일치하면 값을 반환합니다.
      return decodeURIComponent(cookieValue);
    }
  }

  // 원하는 쿠키를 찾지 못하면 null을 반환합니다.
  return null;
}
function Header() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태

  const navigate = useNavigate;

  useEffect(() => {
    // 페이지 로드 시 쿠키 읽기
    //const cookies = parseCookies();

    let myCookieValue = getCookie("JSESSIONID");
    // const jsessionIdCookie = cookies["JSESSIONID"];

    // JSESSIONID 쿠키가 존재하면 로그인 상태로 설정
    // setIsLoggedIn(!!jsessionIdCookie);
    console.log("myCookieValue  : " + myCookieValue);
  }, []);

  // 로그인 버튼 클릭시 실행됨
  const handleLogin = () => {
    // navigate({ state: { value: location.pathname } });
    // navigate("/Login", { state: { from: location.pathname } });
    navigate(location.pathname);

    console.log(location.pathname);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    // 로그아웃 로직 수행
    setIsLoggedIn(false);
  };

  // useEffect(() => {
  //   // 페이지 로드 시 JSESSIONID 쿠키 확인
  //   const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  //   const jsessionIdCookie = cookies.find((cookie) =>
  //     cookie.startsWith("JSESSIONID=")
  //   );

  //   // JSESSIONID 쿠키가 존재하면 로그인 상태로 설정
  //   setIsLoggedIn(!!jsessionIdCookie);
  // }, []);

  return (
    <div className={style.wrap}>
      <div className={style.head_wrap}>
        <div className={style.head_left}>
          <div>
            <Link to="/">
              <i>
                <img src="" alt="로고" />
              </i>
            </Link>
          </div>
        </div>

        <div className={style.head_middle}>
          <div>
            <input placeholder=" 검색하세요 " />
          </div>
        </div>

        <div className={style.head_right}>
          <ul>
            <li>
              <a href="">구독신청</a>
            </li>

            {/* 회원가입, 로그인 링크를 로그인 상태에 따라 조건부 렌더링 */}
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/Join">회원가입</Link>
                </li>
                <li>
                  {/* <Link to={`/${urlBack}/Login`}>로그인</Link> */}

                  <Link
                    to={{
                      pathname: "/Login",
                      state: { from: location.pathname },
                    }}
                    onClick={handleLogin}
                  >
                    로그인
                  </Link>
                </li>
              </>
            )}

            {/* 로그인 상태일 때 유저 정보를 보여줌 */}
            {isLoggedIn && (
              <>
                <li onClick={handleLogout}>로그아웃</li>
                <li>유저 이름 등</li>
              </>
            )}
          </ul>
          <ul>
            <li>
              <a href="">인기</a>
            </li>
            <li>
              <a href="">급상승</a>
            </li>
            <li>
              <a href="">최신</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
