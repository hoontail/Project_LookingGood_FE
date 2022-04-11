import React from "react";
import styled from "styled-components";
import team from "../imagegroup/team.jpg";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";

const Signup = () => {
  const [userid, setId] = useState("");
  const [userImageUrl, setUrl] = useState("");
  const [password, setPwd] = useState(""); 
  const [pwdCheck, setPwdCheck] = useState(""); 
  const history = useHistory();
  const dispatch = useDispatch();

  const signup = (props) => {
    const idCheck = (userid) => {
      let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])/;
  
      return _reg.test(userid);
    }

    if (userid === "" || password === "" || userImageUrl === "") {
      window.alert("아이디, 패스워드, URL을 모두 입력해주세요!");
      return;
    }

    if(!idCheck(userid)){
      window.alert('아이디의 첫번째 자리에는 특수문자가 올 수 없습니다.');
      return;
    }
    
    if (password !== pwdCheck) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    dispatch(userAction.signupDB(userid, password, userImageUrl));
    console.log(userid,password)
  }
  

  return (
    <Whole>
      <Photo src={team} />
      <Signbox>
        <Title>회원가입</Title>
        <Info>
          <InputBox
            onChange={(e) => {
            setId(e.target.value)
          }}type="text" placeholder="아이디를 입력해주세요"></InputBox>
          <InputBox 
            onChange={(e) => {
              setUrl(e.target.value)
            }}
            type="url"
            placeholder="프로필 사진의 URL을 정확하게 입력해주세요."
          ></InputBox>
          <InputBox onChange={(e) => {
            setPwd(e.target.value)
          }}
            type="password"
            placeholder="패스워드를 입력해주세요."
          ></InputBox>
          <InputBox onChange={(e) => {
            setPwdCheck(e.target.value)
          }}
            type="password"
            placeholder="패스워드를 다시 한번 입력해주세요."
          ></InputBox>
        </Info>
        <Mybtn onClick={() => {
          signup();
          history.push('/login');
        }}>회원가입하기</Mybtn>
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
  height: 600px;
  margin: 30px 0px;
`;

const InputBox = styled.input`
  width: 70%;
  height: 26px;
  margin: 25px;
  border: 0px;
  padding: 5px 0px 5px 0px;
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
border: 3px solid transparent;
border-radius: 8px;
padding: 10px;
box-shadow: 1px 1px 0.5px #394481;
margin-bottom: 100px;
&:hover {
  border: 3px solid #394481;
}
`;

export default Signup;
