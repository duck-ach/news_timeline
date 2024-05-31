import React, { useState, useEffect } from "react";
import axios from "axios";

function UserInfo() {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        // 쿠키 가져오기
        const sessionId = getCookie("JSESSIONID");

        // axios 요청 시 쿠키 포함
        const response = await axios.get("/api/users/info", {
          headers: {
            Cookie: `JSESSIONID=${sessionId}`,
          },
        });
        setUserInfo(response.data); // 사용자 정보 설정
        setLoading(false); // 로딩 상태 해제
      } catch (error) {
        console.error("Error fetching user info:", error);
        setLoading(false);
      }
    }

    fetchUserInfo();
  }, []);

  // 쿠키 가져오는 함수
  function getCookie(name) {
    const cookieStr = document.cookie;
    const cookies = cookieStr.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Info</h1>
      <p>ID: {userInfo.id}</p>
      <p>Nickname: {userInfo.nickname}</p>
      <p>Gender: {userInfo.gender}</p>
      <p>Birthday: {userInfo.birthday}</p>
    </div>
  );
}

export default UserInfo;
