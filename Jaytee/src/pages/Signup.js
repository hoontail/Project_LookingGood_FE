import React from "react";
import styled from "styled-components";
import team from "../imagegroup/team.jpg";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  return (
    <Whole>
      <Photo src={team} />
      <Signbox>
        <Title>회원가입</Title>
        <Info>
          <InputBox type="id" placeholder="아이디를 입력해주세요"></InputBox>
          <InputBox
            type="url"
            placeholder="프로필 사진의 URL을 정확하게 입력해주세요."
          ></InputBox>
          <InputBox
            type="password"
            placeholder="패스워드를 입력해주세요."
          ></InputBox>
          <InputBox
            type="password"
            placeholder="패스워드를 다시 한번 입력해주세요."
          ></InputBox>
        </Info>
        <Mybtn>회원가입하기</Mybtn>
      </Signbox>
    </Whole>
  );
};

const Whole = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 600px;
  height: 600px;
  margin: 30px 120px 30px 30px;
  border-radius: 10px;
  box-shadow: -3px 3px 9px #394481;
`;

const Signbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 600px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 30px;
  box-shadow: 3px 1px 9px #394481;
`;

const Title = styled.div`
  font-size: 40px;
  margin-top: 100px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 600px;
  margin: 30px;
`;

const InputBox = styled.input`
  width: 70%;
  height: 26px;
  margin: 25px;
  border: 0px;
  border-bottom: 1px solid #000;
  background-color: transparent;
  &: hover {
    border: 0px;
    border-bottom: 2px solid #394481;
  }
  &: focus-visible {
    outline: none;
  }
`;

const Mybtn = styled.button`
  background-color: #fafafa;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 100px;
  &:hover {
    box-sizing: border-box;
    border: 3px solid #394481;
  }
`;

export default Signup;
