import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <>
      <Team><P>우리조 정말 정말 좋은 거 같은데요?</P></Team>
      <Team><P>FE 이태훈 이성영 김정태 BE 김윤하 윤석일 성영호</P> </Team>
    </>
  );
}

export default Footer;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  bottom : 0;
  background-color:#fafafa;
`;

const P = styled.p`
 font-size: 13px;
 color : gray
 
`