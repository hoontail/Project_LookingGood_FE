import React from "react";
import styled from "styled-components";
import Image from "./Image";
function LoginBar(props) {
  return (
    <>
      <BtnGroup>
        {/* <Btn>로그인</Btn> */}
        {/* <Btn>회원가입</Btn> */}
       <Image shape= "circle"></Image>
        <Btn>LeeTaeHoon</Btn>
        <Btn>로그아웃</Btn>
      </BtnGroup>
    </>
  );
}

export default LoginBar;

const BtnGroup = styled.div`
  display: flex;
  /* float: right; */
  margin-left: 8px;
`;

const Btn = styled.button`
  margin-right : 50px;
  width : 90px;
  height: 50px;
  flex-direction: row;
  border-radius: 20px;
  border: none;
  background-color: #fafafa;
  font-size: 16px;
  cursor: pointer;
  &:hover{  
    background-color : #394481;
    /* #FF385C; */
    color : white;
  }
`;

