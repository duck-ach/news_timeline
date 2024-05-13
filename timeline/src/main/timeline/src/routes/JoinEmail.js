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

  // 중복 아이디 쳌크
  const idCheckSameId = (backendIds) => {
    // 백엔드로부터 받은 ID 정보를 배열로 가정
    // 예시: ['user1', 'user2', 'user3']

    // 사용자가 입력한 ID
    const userInputId = id;
    // 백엔드로부터 받은 ID 정보와 사용자가 입력한 ID를 비교하여 중복 여부 확인
    const isDuplicate = backendIds.includes(userInputId);
    if (isDuplicate) {
      alert("중복된 아이디입니다.");
    } else {
      alert("사용 가능한 아이디입니다.");
    }
  };

  // 폼 핸들러 시작
  const handlesSubmit = (event) => {
    event.preventDefault(); // 기본 제출동작 방지용

    // 생년월일을 합쳐서 birthday 변수에 저장
    const birthday = `${year}-${month}-${day}`;

    // 데이터 이쿠요잇
    fetch("여기 URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        nickname,
        pw,
        gender,
        birthday,
        yangruck,
      }),
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
          />
        </div>
        <button type="button" onClick={idCheckSameId}>
          중복 체크
        </button>
        {/* ID 끝 */}

        {/* 닉네임 시작 */}
        <div>
          <label>닉네임 :</label>
          <input
            type="text"
            value={nickname}
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
          maxlength="10"
          placeholder="8글자이상"
          value={pw}
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
          maxlength="10"
          placeholder="8글자이상"
          required
        />
        {/*  비밀번호 끝 */}
        <br />
        {/* 성별 시작 */}
        <div class="gender">
          <input
            type="radio"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="women">여성</label>
          <input
            type="radio"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="men">남성</label>
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
