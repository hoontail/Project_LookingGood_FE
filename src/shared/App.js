import React from "react";
import Header from "./Header";
import { Login, Signup, Main, PostWrite, Postlist, DetailPage, PostEdit} from "../page/pages";
import { BrowserRouter, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import { actionCreators as imageActions } from "../redux/modules/image";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configstore";
import Button from "../elements/Button"


function App() {
 
  const dispatch = useDispatch();
  const login = useSelector((state) => state.User.is_login);
  
  const is_session = sessionStorage.getItem("token") ? true : false;

  
  
  const write = () => {
    history.push('/write')
  }

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }

  }, []);

  return (
    <> 
    <Header/>
      <ConnectedRouter history={history}>
        <Route path="/" component={Main} exact/>
        <Route  component={Header}/>
        <Route path="/write" component={PostWrite}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/edit/:id" component={PostEdit} exact/>
        <Route path="/list/:category" component={Postlist}/>
        <Route path="/detail/:postid" component={DetailPage}/>
        {is_session? <Button create text="+" _onClick={write}></Button> : null}
      </ConnectedRouter>
  
    </>
  );
}

export default App;
