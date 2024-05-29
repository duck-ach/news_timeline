package com.raju.timeline.service;

import com.raju.timeline.domain.UsersDTO;
import com.raju.timeline.mapper.UsersMapper;
import com.raju.timeline.util.SecurityUtil;
import org.apache.catalina.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Member;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UsersServiceImplTest {

    @Autowired
    private SecurityUtil securityUtil;

    @Autowired
    private UsersMapper usersMapper;


    @Test
    @DisplayName("회원가입 테스트")
    @Transactional
    void save() {

        // given
        String id = "djagmlfk";
        String nickname = "히룽지";
        String pw = "P@ssw0rd";
        String gender = "M"; // M, F, Z
        String birthday = "19990902";

        pw = securityUtil.sha256(pw);

        UsersDTO user = new UsersDTO();
        user.setId(id);
        user.setNickname(nickname);
        user.setPw(pw);
        user.setGender(gender);
        user.setBirthday(birthday);

        // when
        int saveUser = usersMapper.insertUsers(user);

        // then
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", id);
        UsersDTO findUser = usersMapper.selectUserByMap(map);
        String findUserId = findUser.getId();
        Assertions.assertThat(findUserId).isEqualTo(id);
    }

    @Test
    void login() {
    }

    @Test
    void keepLogin() {
    }

    @Test
    void isReduceId() {
    }

    @Test
    void checkReduceNick() {
    }

    @Test
    void logout() {
    }

    @Test
    void usersInfo() {
    }
}