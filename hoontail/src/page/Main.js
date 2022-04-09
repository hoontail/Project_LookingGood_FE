import React from "react";
import styled from "styled-components";
import Footer from "../shared/Footer";

function Main(props) {
  return (
    <>
      <Container>
        <Menu><P>TEAM</P></Menu>      
        <Menu><P>ALGORITHM</P></Menu>
        <Menu><P>SKY</P></Menu> 
        <Menu><P>COMMIT</P></Menu>
        <Menu><P>FOOD</P></Menu>
        <Menu><P>DIARY</P></Menu>
      </Container>
      <Footer/>
    </>
  );
}

export default Main;

const Container = styled.div`
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  /* margin: 20px 0px 0px 0px; */
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
/* max-width: 430px; */
 width: 500px; 
//   height: 200px;
   margin: 0px 60px;
//   /* background-color: blue; */
 display: flex;
 flex-direction: column;
//   justify-content: center;
   align-items: center;
 `;
 
const P = styled.p`
  font-size: 110px;
  margin-bottom: 15px;
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
        -webkit-transform: scale(1.2,1.2);
    -moz-transform: scale(1.2,1.2);
    -o-transform: scale(1.2,1.2);
    -ms-transform: scale(1.2,1.2);
    transform: scale(1.2,1.2);

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