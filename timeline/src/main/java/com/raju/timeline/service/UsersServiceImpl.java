package com.raju.timeline.service;

import com.raju.timeline.domain.UsersDTO;
import com.raju.timeline.mapper.UsersMapper;
import com.raju.timeline.util.SecurityUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class UsersServiceImpl implements UsersService {

    private final UsersMapper usersMapper;

    private final SecurityUtil securityUtil;

    @Autowired
    public UsersServiceImpl(UsersMapper usersMapper, SecurityUtil securityUtil) {
        this.usersMapper = usersMapper;
        this.securityUtil = securityUtil;
    }

    // 회원가입
    @Transactional
    @Override
    public void save(HttpServletRequest request, HttpServletResponse response) {
        String id = request.getParameter("id");
        String nickname = request.getParameter("nickname");
        String pw = request.getParameter("pw");
        String gender = request.getParameter("gender");
        String birthday = request.getParameter("birthday");

        // (input type=text) XSS 방지
//        id = securityUtil.preventXSS(id);
//        nickname = securityUtil.preventXSS(nickname);

        // 비밀번호 암호화 처리
        pw = securityUtil.sha256(pw);

        UsersDTO usersDTO = UsersDTO.builder()
                .id(id)
                .nickname(nickname)
                .pw(pw)
                .gender(gender)
                .birthday(birthday)
                .build();

        int result = usersMapper.insertUsers(usersDTO);

        // response data
        try {
            response.setContentType("text/html; charset=UTF-8");
            PrintWriter out = response.getWriter();
            Map<String, Object> userMap = new HashMap<String, Object>();
            userMap.put("id", id);

            if(result > 0) {
                request.getSession().setAttribute("loginUser", usersMapper.selectUserByMap(userMap));

                out.println("<script>");
                out.println("alert('환영합니다 :)<br>회원 가입이 완료되었습니다.');");
                out.println("location.href='/';");
                out.println("</script>");
            } else {
                out.println("<script>");
                out.println("alert('회원가입 도중 오류가 발생했습니다.<br>다시 시도해주세요');");
                out.println("history.back();");
                out.println("</script>");
            }
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void login(HttpServletRequest request, HttpServletResponse response) {
        String url = request.getParameter("url");
        String id = request.getParameter("id");
        String pw = request.getParameter("pw");

        pw = securityUtil.sha256(pw);

        Map<String, Object> userMap = new HashMap<String, Object>();
        userMap.put("id", id);
        userMap.put("pw", pw);

        // 유저조회
        UsersDTO loginUser = usersMapper.selectUserByMap(userMap);
        if(loginUser != null) {

            // 로그인 유지
            keepLogin(request, response);

            // 세션추가 == 로그인 처리
            request.getSession().setAttribute("loginUser", loginUser);

            try {
                response.sendRedirect(url);
            } catch (IOException e) {
                e.printStackTrace();
            }

        } else { // id, pw 일치하는 회원 없을 경우
                try {
                    response.setContentType("text/html; charset=UTF-8");
                    PrintWriter out = response.getWriter();

                    out.println("<script>");
                    out.println("alert('일치하는 회원 정보가 없습니다.');");
                    out.println("history.back();");
                    out.println("</script>");
                    out.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
        }

    }

    @Override
    public void keepLogin(HttpServletRequest request, HttpServletResponse response) {
        String id = request.getParameter("id");
        String keepLogin = request.getParameter("keepLogin");

        if(keepLogin != null) {
            // session id
            String sessionId = request.getSession().getId();

            // 1. session_id를 쿠키에 저장
            Cookie cookie = new Cookie("keepLogin", sessionId); // session id
            cookie.setMaxAge(60 * 60 * 24 * 15); // 60초, 60분, 24시간(1일), 15일 // 총 15일
            cookie.setPath(request.getContextPath()); // 같은 ContextPath 를 사용하는 모든 페이지에서 쿠키 사용 가능
            response.addCookie(cookie); // 클라이언트에게 보내기

            // 2. session_id를 DB에 저장
            UsersDTO user = UsersDTO.builder().id(id).sessionId(sessionId)
                    .sessionLimitDate(new Date(System.currentTimeMillis() + (60 * 60 * 24 * 15) * 1000)).build();

            usersMapper.updateSessionInfo(user);
        } else { // 로그인 유지를 체크하지 않은 경우 : Null
            // keepLogin 쿠키 제거하기
            Cookie cookie = new Cookie("keepLogin", "");
            cookie.setMaxAge(0);
            cookie.setPath(request.getContextPath());
            response.addCookie(cookie);
        }
    }

    @Override
    public Map<String, Object> isReduceId(Map<String, Object> map) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("isUser", usersMapper.selectUserByMap(map) != null); // Null 이 아닐 때 조회되었으면 True
        return result;
    }

    @Override
    public Map<String, Object> checkReduceNick(Map<String, Object> map) {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("isNick", usersMapper.selectUserByMap(map) != null); // Null 이 아닐 때 조회되었으면 True
        return result;
    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response) {

        // 로그아웃 == 세션 초기화
        HttpSession session = request.getSession();
        if(session.getAttribute("loginUser") != null) {
            session.invalidate();
        }

        // 로그인 유지 해제 == 쿠키 초기화
        Cookie cookie = new Cookie("keepLogin", "");
        cookie.setMaxAge(0);
        cookie.setPath(request.getContextPath());
        response.addCookie(cookie);

    }

    @Override
    public Map<String, Object> usersInfo(HttpServletRequest request, HttpServletResponse response) {
        // 세션 정보
        HttpSession session = request.getSession();

        return null;
    }
}
