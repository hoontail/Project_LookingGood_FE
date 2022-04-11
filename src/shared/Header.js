import React from "react";
import styled from "styled-components";
import LoginBar from "../components/LoginBar";
import Grid from "../elements/Grid";
import logo from "../imagegroup/logo.png";
import { useHistory } from "react-router-dom";


function Header(props) {
  const history = useHistory()
 


  return (
    <>
      <Nav>
     
        <Imgbox>
          <Grid padding="10px" >
          <img src={logo} width="150px" onClick={()=>
          history.push('/')} />
          </Grid>
        </Imgbox>
        <MenuBar>
        <P onClick={()=>
          history.push('/list/TEAM')}>TEAM
          </P>  
        <P onClick={()=>
          history.push('/list/SKY')}>SKY
          </P>  
        <P onClick={()=>
          history.push('/list/FOOD')}>FOOD
          </P>  
        <P onClick={()=>
          history.push('/list/DIARY')}>DIARY
          </P>  
        <P onClick={()=>
          history.push('/list/ALGORITHM')}>ALGORITHM
          </P>  
        <P onClick={()=>
          history.push('/list/COMMIT')}>COMMIT
          </P>  
        </MenuBar>
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

const MenuBar = styled.div`
  background-color: #fafafa;
  flex-direction: row;
  display: flex;
  max-width: 50vw;
 
  
`;

const P = styled.p`
font-size: 20px;
margin: 10px 30px;
cursor: pointer;


`;