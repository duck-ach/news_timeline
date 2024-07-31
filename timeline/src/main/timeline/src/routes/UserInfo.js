import React, { useState, useEffect } from "react";
import axios from "axios";

function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 유저 정보를 가져오는 함수 정의
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/api/users/info"); // 백엔드의 API 경로로 요청
        setUser(response.data); // 가져온 유저 정보를 상태에 저장
      } catch (error) {
        console.error("유저 정보를 가져오는데 실패했습니다:", error);
      }
    };

    fetchUserInfo(); // 컴포넌트가 마운트되면 유저 정보를 가져오는 함수 호출
  }, []);

  return (
    <div>
      <h2>User Information</h2>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Nickname: {user.nickname}</p>
          <p>Gender: {user.gender}</p>
          <p>Birthday: {user.birthday}</p>
          {/* 필요한 유저 정보를 출력 */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserInfo;
