import { Link, useNavigate, useLocation } from "react-router-dom"; // useNavigate
import style from "./Header.module.css";
import axios from "axios";
import Home from "./Home";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, userInfo, login, logout } = useAuth();

  useEffect(() => {
    console.log("userInfo: ", userInfo);
  }, [userInfo]);

  // 로그인 버튼 클릭시 실행됨
  const handleLogin = () => {
    navigate("/Login", { replace: true, state: { from: location.pathname } });

    console.log(location.pathname);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    // 로그아웃 로직 수행
    localStorage.setItem("isAuthenticated", "false");
    logout();
    // setIsLoggedIn(false);
    navigate("/home");
    window.location.reload();
  };

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
            {!isAuthenticated && (
              <>
                <li>
                  <Link to="/Join">회원가입</Link>
                </li>
                <li>
                  {/* <Link to={`/${urlBack}/Login`}>로그인</Link> */}

                  {/* <Link
                    to={{
                      pathname: "/Login",
                      state: { from: location.pathname },
                    }}
                    onClick={handleLogin}
                  >
                    로그인
                  </Link> */}
                  <span onClick={handleLogin}>로그인</span>
                </li>
              </>
            )}

            {/* 로그인 상태일 때 유저 정보를 보여줌 */}
            {isAuthenticated && (
              <>
                <li onClick={handleLogout}>로그아웃</li>
                <li>
                  <Link to="/UserInfo">내 개인정보</Link>
                </li>
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
