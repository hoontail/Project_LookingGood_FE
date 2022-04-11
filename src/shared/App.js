import React from "react";
import Main from "../page/Main";
import Header from "./Header";
import PostEdit from "../page/PostEdit";
import Postlist from "../page/Postlist";

import PostWrite from "../page/PostWrite";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <> 
    <Header/>
      <BrowserRouter>
        
        <Route path="/" component={Main} exact/>
        <Route path="/write" component={PostWrite}/>
        {/* <Route path="/edit/:id" component={PostEdit} exact/> */}
        <Route path="/list/:category" component={Postlist}/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
