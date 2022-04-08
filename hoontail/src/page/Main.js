import React from "react";
import styled from "styled-components";

function Main(props) {
  return (
    <>
      <Container>
        <Menu>
          <P>DIARY</P>
        </Menu>
        <Menu><P className ="a">ALGORITHM</P></Menu>
        <Menu><P>SKY</P></Menu>
        <Menu><P>COMMIT</P></Menu>
        <Menu><P>FOOD</P></Menu>
        <Menu><P>TEAM</P></Menu>
      </Container>
    </>
  );
}

export default Main;

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 20px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row; /* justify-content: center; */
  align-items: center;
  padding: 10px;
  /* border: 3px solid black; */
  justify-content: center;
  background-color: #fafafa;
`;

const Menu = styled.div`
  max-width: 430px;
  width: 500px;
  height: 400px;
  margin: 60px;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-size: 100px;
  color: white;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  cursor:pointer;
  display: inline-block;
   
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    transition: 0.5s;
    &:hover{
        color: rgb(0, 0, 0);
        -webkit-transform: scale(1.5,1.5);
    -moz-transform: scale(1.5,1.5);
    -o-transform: scale(1.5,1.5);
    -ms-transform: scale(1.5,1.5);
    transform: scale(1.5,1.5);

    }
 
`;



// a{
//     display: inline-block;
//     color: rgb(0, 0, 0);
//     -webkit-transition: 0.5s;
//     -moz-transition: 0.5s;
//     -o-transition: 0.5s;
//     -ms-transition: 0.5s;
//     transition: 0.5s;
// }

// a:hover {
//     -webkit-transform: scale(1.5,1.5);
//     -moz-transform: scale(1.5,1.5);
//     -o-transform: scale(1.5,1.5);
//     -ms-transform: scale(1.5,1.5);
//     transform: scale(1.5,1.5);
// }