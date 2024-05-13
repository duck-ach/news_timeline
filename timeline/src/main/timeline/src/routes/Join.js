import { Link } from "react-router-dom";

import JoinEmail from "../routes/JoinEmail";
import Home from "./Home";
function Join() {
  return (
    <div className="wrap">
      <div>회원가입 영역</div>
      <h2>회원 가입</h2>

      <div>
        <h3>가입 방식을 선택해주세요</h3>

        <div>
          <Link to="/JoinEmail">
            <button>이메일로 회원가입</button>
          </Link>
          <p>소셜로 회원가입</p>

          <ul className="social_box">
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

          <hr />
          <div>
            <h4>
              <a href="/Login">이미 회원이십니까?</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
