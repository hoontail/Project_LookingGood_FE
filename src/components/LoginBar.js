import React from "react";
import styled from "styled-components";
import { history } from "../redux/configstore";

function LoginBar(props) {
  return (
    <>
    
      <BtnGroup>
        <Btn
          onClick={() => {
            history.push("/login");
          }}
        >
          로그인
        </Btn>
        <Btn
          onClick={() => {
            history.push("/signup");
          }}
        >
          회원가입
        </Btn>
      </BtnGroup>
    </>
  );
}

export default LoginBar;

const BtnGroup = styled.div`
  display: flex;
  /* float: right; */
  margin-left: 8px;
  background-color: #fafafa;
`;

const Btn = styled.button`
  margin-right: 50px;
  width: 90px;
  height: 50px;
  flex-direction: row;
  border-radius: 20px;
  border: none;
  background-color: #fafafa;
  font-size: 16px;
  
  cursor: pointer;
  &:hover {
    background-color: #394481;
    /* #FF385C; */
    color: white;
  }
`;
