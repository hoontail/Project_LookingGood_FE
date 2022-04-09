import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <>
      <We>좋은 거 같은데요?</We>
      <We>FE 이태훈 이성영 김정태 BE 김윤하 윤석일 성영호 </We>
    </>
  );
}

export default Footer;

const We = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  bottom : 0;
  background-color: gray;
`;
