import styled from "./Login.module.css";
//import { useLocation } from "react-router-dom";
function Login() {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const redirectUrl = searchParams.get("redirect");
  return (
    <div className={styled.wrap}>
      <h2>로그인</h2>
      <div className={styled.login_wrap}>
        <form className={styled.login_from}>
          <div className={styled.text_input_area}>
            <input name="emailPhon" placeholder="이메일 또는 휴대폰 번호" />
          </div>
          <div className={styled.text_input_area}>
            <input name="pw" placeholder="비밀번호" />
          </div>
          <div className={styled.loginCheck}>
            <input type="checkBox" />
            <span>로그인 상태 유지</span>
          </div>
          <button className={styled.login_btn}>로그인</button>
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
          {/* hidden input에 직전의 URL 저장 */}
          {/* <input type="hidden" name="redirect" value={redirectUrl || ""} /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
