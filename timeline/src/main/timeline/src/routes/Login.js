function Login() {
  return (
    <div className="wrap">
      <h2>로그인</h2>
      <div className="login_wrap">
        <form className="login_from">
          <div className="text_input_area">
            <input name="emailPhon" placeholder="이메일 또는 휴대폰 번호" />
          </div>
          <div className="text_input_area">
            <input name="pw" placeholder="비밀번호" />
          </div>
          <div className="loginCheck">
            <input type="checkBox" />
            <span>로그인 상태 유지</span>
          </div>
          <button className="login_btn">로그인</button>
        </form>
        <div className="join_find_box">
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

        <div className="join_find_box">
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
