import React from "react";
import Main from "../page/Main";
import Header from "./Header";

import PostWrite from "../page/PostWrite";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <> 
    <Header/>
      <BrowserRouter>
       
        <Route path="/" component={Main} exact/>
        <Route path="/write" component={PostWrite}/>
        
      </BrowserRouter>
  
    </>
  );
}

export default App;
