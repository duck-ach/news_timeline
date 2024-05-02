package com.raju.timeline.vo;

import java.util.List;

public class NaverResultVO {
private String lastBuildDate;
	private int total;
	private int start;
	private int display;
	private List<newsVo> items;

	public String getLastBuildDate() {
		return this.lastBuildDate;
	}

	public void setLastBuildDate(String lastBuildDate) {
		this.lastBuildDate = lastBuildDate;
	}

	public int getTotal() {
		return this.total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getStart() {
		return this.start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getDisplay() {
		return this.display;
	}

	public void setDisplay(int display) {
		this.display = display;
	}

	public List<newsVo> getItems() {
		return this.items;
	}

	public void setItems(List<newsVo> items) {
		this.items = items;
	}

}
