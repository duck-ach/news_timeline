import { useState } from "react";
import styled from "../humor/Save.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import axios from "axios";
Quill.register("modules/imageResize", ImageResize);

function Save() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const handleChange = (value) => {
    setText(value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("/api/humor/Save", {
        title: title,
        content: text,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    imageResize: {
      // 이미지 리사이징 모듈 설정
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div id={styled.wrap}>
      <form
        className={styled.in_editor_form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className={styled.title_info_area}>
          <div className={styled.title_info_user}>
            <span>&#91;아이디/대화명&#93;</span>
            <span>&nbsp;&nbsp; xtick18000/주노</span>
            <button type="submit" className={styled.saveButton}>
              ㅋㅋ 게시물 저~장
            </button>
          </div>

          <div className={styled.title_info_titles}>
            <span>제목</span>
            <input
              type="text"
              className={styled.in_editor_titleInput}
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </div>

        <div>
          <ReactQuill
            className={styled.in_editor}
            value={text}
            onChange={handleChange}
            modules={modules}
            formats={formats}
          />
        </div>
      </form>
    </div>
  );
}

export default Save;
