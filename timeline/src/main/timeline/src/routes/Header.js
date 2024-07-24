import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "../state/authState";
import axios from "axios";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useRecoilValue(authState);
  const setAuthState = useSetRecoilState(authState);

  // 로그인 버튼 클릭 시 실행됨
  const handleLogin = () => {
    navigate("/Login", { replace: true, state: { from: location.pathname } });
    console.log(location.pathname);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    // 로그아웃 로직 수행
    setAuthState(false); // 로그인 상태를 false로 업데이트
    localStorage.setItem("isAuthenticated", "false"); // Optional: 서버와의 동기화를 위해 필요하다면 유지
    navigate("/home");
    window.location.reload(); // Optional: 강제로 페이지를 새로고침하여 상태 반영
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
