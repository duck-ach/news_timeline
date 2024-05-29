import { Link, useNavigate, useLocation } from "react-router-dom"; // useNavigate
import style from "./Header.module.css";

import Home from "./Home";
import { useEffect, useState } from "react";

function Header() {
  // const navigate = useNavigate();
  const location = useLocation();
  // const { from } = location.pathname;
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태

  // useEffect(() => {
  //   navigate("/Login", { state: { from: location.pathname } });
  // }, []);
  const navigate = useNavigate(); //변수에 저장
  const ItemDetail = () => {};

  // 로그인 버튼 클릭시 실행됨
  const handleLogin = () => {
    // navigate({ state: { value: location.pathname } });
    // navigate("/Login", { state: { from: location.pathname } });
    //  navigate(location.pathname);

    console.log(location.pathname);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    // 로그아웃 로직 수행
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // 페이지 로드 시 JSESSIONID 쿠키 확인
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const jsessionIdCookie = cookies.find((cookie) =>
      cookie.startsWith("JSESSIONID=")
    );

    // JSESSIONID 쿠키가 존재하면 로그인 상태로 설정
    setIsLoggedIn(!!jsessionIdCookie);
  }, []);

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
