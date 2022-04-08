import React from "react";
import styled from "styled-components";
import LoginBar from "../components/LoginBar";
import Grid from "../elements/Grid";
function Header(props) {
  return (
    <>
      <Nav>
          <Grid is_flex padding ="0px 0px 0px 16px"> 로고</Grid>
          <Btns>  <LoginBar></LoginBar></Btns>
      
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
  background-color: #fafafa;
 
`;

const Btns = styled.div`
  /* float : right; */
  display: flex;
  
`;


