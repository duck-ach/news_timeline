import styled from "../humor/HumorIndex.module.css";
// HumorIndex.module.css";

function HumorIndex() {
  return (
    <div id={styled.wrap}>
      <h2>유머게시판</h2>
      <div className={styled.searchBox}>
        <button>글쓰기</button>
        <form>
          <select name="languages" id="lang">
            <option value="title">제목 검색</option>
            <option value="user">작성자 검색</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>
      </div>
      <ul className={styled.board_box}>
        <li className={styled.board_list}>
          <image alt="섬네일" /> <a>예전에 전남친네 아빠랑 짱친이였음.jpg</a>
          <span> 34 </span>
        </li>
        <li className={styled.board_list}>
          <a>2년전, 700억 횡령당한 우리은행 근황 </a> <span> 12 </span>
        </li>
        <li className={styled.board_list}>
          <a>나이 38살먹고 주변친구들 보며 느낀점 jpg </a> <span> 54 </span>
        </li>
      </ul>
    </div>
  );
}

export default HumorIndex;
