import React from "react";
import styled from "styled-components";
import LoginBar from "../components/LoginBar";
import LoginBar2 from "../components/LoginBar2";
import Grid from "../elements/Grid";
import logo from "../imagegroup/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
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
  return (
    <>
      <Nav>
        <Imgbox>
          <Grid padding="10px">
            <Image
              src={logo}
              onClick={() => {
                history.push("/");
              }}
            />
          </Grid>
        </Imgbox>
        {history.location.pathname === "/" ? null : (
          <MenuBar>
            {history.location.pathname === "/list/TEAM" ? (
              <Strong onClick={() => history.push("/list/TEAM")}>TEAM</Strong>
            ) : (
              <P onClick={() => history.push("/list/TEAM")}>TEAM</P>
            )}
            {history.location.pathname === "/list/SKY" ? (
              <Strong onClick={() => history.push("/list/SKY")}>SKY</Strong>
            ) : (
              <P onClick={() => history.push("/list/SKY")}>SKY</P>
            )}
            {history.location.pathname === "/list/FOOD" ? (
              <Strong onClick={() => history.push("/list/FOOD")}>FOOD</Strong>
            ) : (
              <P onClick={() => history.push("/list/FOOD")}>FOOD</P>
            )}
            {history.location.pathname === "/list/DIARY" ? (
              <Strong onClick={() => history.push("/list/DIARY")}>DIARY</Strong>
            ) : (
              <P onClick={() => history.push("/list/DIARY")}>DIARY</P>
            )}
            {history.location.pathname === "/list/ALGORITHM" ? (
              <Strong onClick={() => history.push("/list/ALGORITHM")}>
                ALGORITHM
              </Strong>
            ) : (
              <P onClick={() => history.push("/list/ALGORITHM")}>ALGORITHM</P>
            )}
            {history.location.pathname === "/list/COMMIT" ? (
              <Strong onClick={() => history.push("/list/COMMIT")}>
                COMMIT
              </Strong>
            ) : (
              <P onClick={() => history.push("/list/COMMIT")}>COMMIT</P>
            )}
          </MenuBar>
        )}
        <Btns>{is_login && is_session ? <LoginBar2 /> : <LoginBar />}</Btns>
      </Nav>
    </>
  );
}

export default Header;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
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
`;
const MenuBar = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 50vw;
  width: 50%;
`;

const P = styled.p`
  padding: 10px;
  font-size: 20px;
  margin: 10px 30px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background-color: #394481;
    color: white;
  }
`;

const Strong = styled.p`
  padding: 10px;
  font-size: 20px;
  margin: 10px 30px;
  cursor: pointer;
  border-radius: 20px;
  background-color: #394481;
  color: white;
`;
