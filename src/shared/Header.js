import React from "react";
import styled from "styled-components";
import LoginBar from "../components/LoginBar";
import LoginBar2 from "../components/LoginBar2";
import Grid from "../elements/Grid";
import logo from "../imagegroup/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import { history } from "../redux/configstore";

function Header(props) {

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.User.is_login);
  const is_session = sessionStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);
  if (is_login && is_session){
    return (
      <>
        <Nav>
          <Imgbox>
            <Grid padding="10px" >
              <Image src={logo} onClick={()=>{
                history.push('/')
              }}/>
            </Grid>
          </Imgbox>
  
          <Grid is_flex padding="0px 0px 0px 16px"></Grid>
          <Btns>
            <LoginBar2></LoginBar2>
          </Btns>
        </Nav>
      </>
    );
  }
  return (
    <>
      <Nav>
        <Imgbox>
          <Grid padding="10px" >
            <Image src={logo} onClick={()=>{
                history.push('/')
              }}/>
          </Grid>
        </Imgbox>

        <Grid is_flex padding="0px 0px 0px 16px"></Grid>
        <Btns>
          <LoginBar></LoginBar>
        </Btns>
      </Nav>
    </>
  );
  
}

export default Header;

const Nav = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 0;
  height: 100px;
  max-height: 10vh;
  background-color: #fafafa;
  z-index: 2; //우선순위 
`;

const Btns = styled.div`
  /* float : right; */
  display: flex;
`;

const Imgbox = styled.div`
  padding: 20px 20px;
`;

const Image = styled.img`
  width: 130px;
  cursor: pointer;
`
