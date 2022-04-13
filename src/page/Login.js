import React from "react";
import styled from "styled-components";
import team from "../imagegroup/team.jpg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const idCheck = (id) => {
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])/;

    return _reg.test(id);
  };

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!idCheck(id)) {
      window.alert("아이디의 첫번째 자리에는 특수문자가 올 수 없습니다.");
      return;
    }

    dispatch(userActions.loginDB(id, pwd));
  };

  return (
    <Whole>
      <Photo src={team} />
      <Loginbox>
        <Title>로그인</Title>
        <Info>
          <InputBox
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="text"
            placeholder="아이디를 입력해주세요"
          ></InputBox>
          <InputBox
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            type="password"
            placeholder="패스워드를 입력해주세요."
          ></InputBox>
        </Info>
        <Button
          onClick={() => {
            login();
            window.alert("잠시만 기다려주세요!")
          }}
        >
          로그인하기
        </Button>
        <Question>
          회원이 아니신가요?{" "}
          <span
            onClick={() => {
              history.push("/signup");
            }}
          >
            가입하기
          </span>
        </Question>
      </Loginbox>
    </Whole>
  );
};

const Whole = styled.div`
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

const Loginbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 600px;
  border-radius: 10px;
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
  height: 800px;
`;

const InputBox = styled.input`
  width: 70%;
  height: 26px;
  margin: 25px;
  padding: 5px 0px 5px 0px;
  border: none;
  border-bottom: 1px solid #000;
  background-color: transparent;
  &:hover {
    border: 0px;
    border-bottom: 2px solid #394481;
  }
  &:focus-visible {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #fafafa;
  border: 3px solid transparent;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 1px 1px 0.5px #394481;
  &:hover {
    border: 3px solid #394481;
  }
`;

const Question = styled.p`
  font-size: 12px;
  margin-bottom: 100px;
  & > span {
    font-weight: 600;
    color: #394481;
    cursor: pointer;
  }
`;

export default Login;
