import axios from "axios";
import { useState } from "react";

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
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [yangruck, setYangruck] = useState("");
  const [isIdReduced, setIsIdReduced] = useState(false);

  // 중복 확인 버튼 클릭 시 실행되는 함수
  const handleCheckReduceId = () => {
    // 입력된 아이디 값 가져오기
    const inputId = id.trim(); // 입력값에서 앞뒤 공백 제거

    // 아이디가 입력되었는지 확인
    if (inputId === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    // 백엔드로 아이디 중복 확인 요청 보내기
    axios
      .get(`/api/users/checkReduceId?id=${inputId}`)
      .then((response) => {
        // 백엔드로부터 받은 응답 처리
        const isReduced = response.data.isReduced; // 예시로 받은 응답 데이터의 구조에 따라 변경
        setIsIdReduced(isReduced);
        if (isReduced) {
          alert("사용 가능한 아이디입니다.");
        } else {
          alert("이미 사용 중인 아이디입니다.");
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

    console.log(JSON.stringify(dataToSend)); // JSON 데이터를 콘솔에 출력
    // 데이터 이쿠요잇
    fetch(`/api/users/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("서버 응답 ", data);
      })
      .catch((error) => {
        console.log("에러발생 : ", error);
      });
  };

  return (
    <div>
      <h2>회원 가입</h2>
      <form onSubmit={handlesSubmit}>
        {/* ID 시작 */}
        <div>
          <label>아이디 : </label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            name="id"
          />
        </div>
        <button type="button" onClick={handleCheckReduceId}>
          중복 체크
        </button>
        {/* ID 끝 */}

        {/* 닉네임 시작 */}
        <div>
          <label>닉네임 :</label>
          <input
            type="text"
            value={nickname}
            name="nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
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

        <div>
          <label>비밀번호 : </label>
        </div>
        <input
          id="user_pw"
          type="password"
          maxLength="10"
          placeholder="8글자이상"
          value={pw}
          name="pw"
          onChange={(e) => setPw(e.target.value)}
          required
        />
        <br />
        <div>
          <label>비밀번호 확인 : </label>
        </div>
        <input
          id="user_pw_ck"
          type="password"
          maxLength="10"
          placeholder="8글자이상"
          required
        />
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
