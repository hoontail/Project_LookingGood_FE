import React from "react";
import Header from "./Header";
import { Login, Signup, Main, PostWrite, Postlist, DetailPage} from "../page/pages";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  
  return (
    <> 
    <Header/>
      <BrowserRouter>      
        <Route path="/" component={Main} exact/>
        <Route  component={Header}/>
        <Route path="/write" component={PostWrite}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        {/* <Route path="/edit/:id" component={PostEdit} exact/> */}
        <Route path="/list/:category" component={Postlist}/>
        <Route path="/detail" component={DetailPage}/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
