import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function LoginBar2(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.user);

  return (
    <>
      <BtnGroup>
       <Image shape= "circle" src={user.userImageUrl}></Image>
        <Name>{user.userId}</Name>
        <Btn
        onClick={() => {
          dispatch(userActions.logoutDB());
        }}>로그아웃</Btn>
      </BtnGroup>
    </>
  );
}

export default LoginBar2;

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

const Name = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0px 10px 0px 5px;
`
