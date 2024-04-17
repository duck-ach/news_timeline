import { Link } from "react-router-dom";
import style from "./Header.module.css";

import Home from "./Home";

function Header() {
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
            <li>
              <Link to="/Join">회원가입</Link>
            </li>
            <li>
              <Link to="/Login">로그인</Link>
            </li>
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
