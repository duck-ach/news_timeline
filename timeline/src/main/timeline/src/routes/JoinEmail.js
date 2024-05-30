import axios from "axios";
import { useState } from "react";
import styled from "./JoinEmail.module.css";

function JoinEmail() {
  // 년도 옵션 생성
  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let year = 1900; year <= currentYear; year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}년
      </option>
    );
  }

  // 월 옵션 생성
  const monthOptions = [];
  for (let month = 1; month <= 12; month++) {
    monthOptions.push(
      <option key={month} value={month}>
        {month}월
      </option>
    );
  }

  // 일 옵션 생성
  const dayOptions = [];
  for (let day = 1; day <= 31; day++) {
    dayOptions.push(
      <option key={day} value={day}>
        {day}일
      </option>
    );
  }

  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");
  const [chekPw, setCheckPw] = useState("");
  const [alertPw, setAlertPw] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [yangruck, setYangruck] = useState("");
  const [isNickReduced, setIsNickReduced] = useState(null);
  const [isIdReduced, setIsIdReduced] = useState(null);

  const handleSetAlertPw = () => {};

  // 중복 확인 버튼 클릭 시 실행되는 함수
  const handleCheckReduce = (type) => {
    // 입력된 아이디 값 가져오기
    let inputValue = type === "nickname" ? nickname.trim() : id.trim();

    // const inputNickname = nickname.trim(); // 입력값에서 앞뒤 공백 제거

    // 아이디가 입력되었는지 확인
    if (inputValue === "") {
      alert(`${type === "nickname" ? "닉네임" : "아이디"}을(를) 입력해주세요.`);
      return;
    }

    // 백엔드로 아이디 중복 확인 요청 보내기
    axios
      //  .get(`/api/users/checkReduceNick?nickname=${inputNickname}`)
      .get(
        `/api/users/checkReduce${
          type.charAt(0).toUpperCase() + type.slice(1)
        }?${type}=${inputValue}`
      )

      .then((response) => {
        // 백엔드로부터 받은 응답 처리
        //  const isReduced  = response.data.isReduced ; // 예시로 받은 응답 데이터의 구조에 따라 변경
        const isReduced =
          type === "nickname" ? response.data.isNick : response.data.isUser;

        //  setIsIdReduced(isReduced);
        // false면 사용 가능함
        // if (isNick) {
        //   alert("이미 사용 중인 닉네임입니다.");
        //   setIsNickReduced = false;
        // } else {
        //   alert("사용 가능한 닉네임입니다.");
        //   setIsNickReduced = true;
        // }
        // console.log("isNickReduced : " + isNickReduced);
        if (type === "nickname") {
          setIsNickReduced(isReduced);
          alert(
            isReduced
              ? "이미 사용 중인 닉네임입니다."
              : "사용 가능한 닉네임입니다."
          );
        } else {
          setIsIdReduced(isReduced);
          alert(
            isReduced
              ? "이미 사용 중인 아이디입니다."
              : "사용 가능한 아이디입니다."
          );
        }
      })
      .catch((error) => {
        console.error("중복 확인 요청 실패:", error);
        alert("중복 확인에 실패했습니다.");
      });
  };

  // 폼 핸들러 시작
  const handlesSubmit = (event) => {
    event.preventDefault(); // 기본 제출동작 방지용

    if (isIdReduced === null) {
      alert("아이디 중복 검사를 해주세요.");
      return;
    }
    if (isNickReduced === null) {
      alert("닉네임 중복 검사를 해주세요.");
      return;
    }

    if (!isNickReduced) {
      alert("이미 사용 중인 닉네임입니다.");
      return;
    }

    if (!isIdReduced) {
      alert("이미 사용 중인 아이디입니다.");
      return;
    }

    // 생년월일을 합쳐서 birthday 변수에 저장
    const birthday = `${year}-${month}-${day}`;
    const dataToSend = {
      id,
      nickname,
      pw,
      gender,
      birthday,
      yangruck,
    };
    const formData = new FormData();
    formData.append("id", dataToSend.id);
    formData.append("nickname", dataToSend.nickname);
    formData.append("pw", dataToSend.pw);
    formData.append("gender", dataToSend.gender);
    formData.append("birthday", dataToSend.birthday);

    fetch(`/api/users/save`, {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        console.log("서버 응답 ", data);
        alert("회원가입이 완료되었습니다.");
      })
      .catch((error) => {
        console.log("에러발생 : ", error);
      });

    //   console.log(JSON.stringify(dataToSend)); // JSON 데이터를 콘솔에 출력
    //   // 데이터 이쿠요잇
    //   fetch(`/api/users/save`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataToSend),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("서버 응답 ", data);
    //     })
    //     .catch((error) => {
    //       console.log("에러발생 : ", error);
    //     });
    // };
  };
  return (
    <div className={styled.wrap}>
      <h2 className={styled.title}>회원 가입</h2>
      <form onSubmit={handlesSubmit}>
        {/* ID 시작 */}
        <div className={styled.input_box}>
          <label>아이디</label>
          <br />
          <input
            type="text"
            value={id}
            className={styled.join_all_input}
            onChange={(e) => setId(e.target.value)}
            name="id"
          />
          <button
            type="button"
            className={styled.check_btn}
            onClick={() => handleCheckReduce("id")}
          >
            중복 체크
          </button>
        </div>

        {/* ID 끝 */}

        {/* 닉네임 시작 */}
        <div className={styled.input_box}>
          <label>닉네임</label>
          <br />
          <input
            type="text"
            id="nickname"
            className={styled.join_all_input}
            value={nickname}
            name="nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
          <button
            type="button"
            className={styled.check_btn}
            onClick={() => handleCheckReduce("nickname")}
          >
            중복 체크
          </button>
        </div>
        {/* 닉네임 끝 */}

        {/* 이메일 시작 */}
        {/* <div>
          <label>이메일 : </label>
        </div>
        <input id="user_email" type="email" required />
        &nbsp;&nbsp;<button>중복체크</button> */}
        {/* 이메일 끝 */}

        {/*  비밀번호 시작  */}

        <div className={styled.input_box}>
          <label>비밀번호</label>
          <br />

          <input
            id="user_pw"
            type="password"
            maxLength="10"
            placeholder="8글자이상"
            value={pw}
            className={styled.join_all_input}
            name="pw"
            onChange={(e) => setPw(e.target.value)}
            required
          />
        </div>
        <br />
        <div className={styled.input_box}>
          <p
            style={{
              color:
                alertPw === "비밀번호가 일치하지 않습니다." ? "red" : "black",
            }}
          >
            {alertPw || "비밀번호 확인"}
            {/* <input
              value={alertPw}
              readOnly
              placeholder="비밀번호 확인"
              className={styled.checkPw_read}
              style={{
                color:
                  alertPw === "비밀번호가 일치하지 않습니다." ? "red" : "black",
              }}
            /> */}
          </p>
          {/* <label>비밀번호 확인</label> */}

          <input
            id="user_pw_ck"
            className={styled.join_all_input}
            type="password"
            maxLength="10"
            placeholder="8글자이상"
            required
            onChange={(e) => {
              setCheckPw(e.target.value);
              setAlertPw(
                e.target.value == pw
                  ? "비밀번호가 일치합니다."
                  : "비밀번호가 일치하지 않습니다."
              );
            }}
          />
        </div>
        {/*  비밀번호 끝 */}
        <br />
        {/* 성별 시작 */}
        <div className="gender">
          <input
            type="radio"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="women">여성</label>
          <input
            type="radio"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="men">남성</label>
        </div>
        {/* 성별 끝 */}
        {/* 생년월일 시작 */}
        <div>
          <p id="additionalinfo">추가정보</p>
        </div>
        <br />
        <div>
          <p>생년월일 </p>
        </div>
        <div>
          <p>
            <select
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">년도</option>
              {yearOptions}
            </select>
            &nbsp;&nbsp;년&nbsp;&nbsp;
            <select
              name="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">월</option>
              {monthOptions}
            </select>
            &nbsp;&nbsp;월&nbsp;&nbsp;
            <select
              name="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="">일</option>
              {dayOptions}
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              name="yangruck"
              value={yangruck}
              onChange={(e) => setYangruck(e.target.value)}
            />
            양력
            <input
              type="radio"
              name="yangruck"
              value={yangruck}
              onChange={(e) => setYangruck(e.target.value)}
            />
            음력
          </p>
        </div>
        {/* 생년월일 끝 */}
        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
}

export default JoinEmail;
