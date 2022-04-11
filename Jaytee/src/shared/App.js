import React from "react";
import {BrowserRouter, Route} from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import styled from 'styled-components';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import logo from '../imagegroup/logo.png'
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function App() {

  const dispatch = useDispatch();

  // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  // const is_session = sessionStorage.getItem(_session_key) ? true : false;

  // React.useEffect(() => {
  //   if (is_session) {
  //     dispatch(userActions.loginCheckDB());
  //   }
  // }, []);

  return (
    <Container>
      <Header></Header>
      <Logo src={logo}/>
      <Box>
        <ConnectedRouter history={history}>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
        </ConnectedRouter>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fefefe;
`

const Header = styled.header`
  height: 100px;
`

const Logo = styled.img`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 100px;
`

const Box = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: center;
`

export default App;
