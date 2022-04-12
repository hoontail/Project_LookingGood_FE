import React from "react";
import Header from "./Header";
import { Login, Signup, Main, PostWrite, Postlist, DetailPage} from "../page/pages";
import { BrowserRouter, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configstore";


function App() {
  
  const dispatch = useDispatch();

  const is_session = sessionStorage.getItem("token") ? true : false;

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
        {/* <Route path="/edit/:id" component={PostEdit} exact/> */}
        <Route path="/list/:category" component={Postlist}/>
        <Route path="/detail" component={DetailPage}/>
      </ConnectedRouter>
  
    </>
  );
}

export default App;
