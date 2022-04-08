import React from "react";
import styled from "styled-components";

function LoginBar(props) {
  return (
    <>
      <BtnGroup>
        <Btn>로그인</Btn>
        <Btn>회원가입</Btn>
        {/* <Btn>프로필</Btn> */}
        {/* <Btn>로그아웃</Btn> */}
      </BtnGroup>
    </>
  );
}

export default LoginBar;

const BtnGroup = styled.div`
  display: flex;
  float: right;
  margin-left: 8px;
`;

const Btn = styled.button`
  margin-right : 20px;
  
`;
