package com.raju.timeline.domain;

import lombok.*;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UsersDTO {

    private int userId;
    private String id;
    private String nickname;
    private String pw;
    private String gender;
    private String birthday;
    private int agreeCode;
    private String snsType;
    private Date joinDate;
    private Date pwModifyDate;
    private String sessionId;
    private Date sessionLimitDate;
    private int bannedState;

	private String yangruck;

	public String getYangruck() {
		return this.yangruck;
	}

	public void setYangruck(String yangruck) {
		this.yangruck = yangruck;
	}


	public int getUserId() {
		return this.userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNickname() {
		return this.nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getPw() {
		return this.pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getBirthday() {
		return this.birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public int getAgreeCode() {
		return this.agreeCode;
	}

	public void setAgreeCode(int agreeCode) {
		this.agreeCode = agreeCode;
	}

	public String getSnsType() {
		return this.snsType;
	}

	public void setSnsType(String snsType) {
		this.snsType = snsType;
	}

	public Date getJoinDate() {
		return this.joinDate;
	}

	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}

	public Date getPwModifyDate() {
		return this.pwModifyDate;
	}

	public void setPwModifyDate(Date pwModifyDate) {
		this.pwModifyDate = pwModifyDate;
	}

	public String getSessionId() {
		return this.sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public Date getSessionLimitDate() {
		return this.sessionLimitDate;
	}

	public void setSessionLimitDate(Date sessionLimitDate) {
		this.sessionLimitDate = sessionLimitDate;
	}

	public int getBannedState() {
		return this.bannedState;
	}

	public void setBannedState(int bannedState) {
		this.bannedState = bannedState;
	}

}

