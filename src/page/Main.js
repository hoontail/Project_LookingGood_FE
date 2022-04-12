import React from "react";
import { useHistory, } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Footer from "../shared/Footer";
import { actionCreators as postActions } from "../redux/modules/post";
function Main(props) {
 const history = useHistory()

 const dispatch = useDispatch()
 
 React.useEffect(() => {

  dispatch(postActions.getPostDB());

}, []);
  return (
    <>
      <Container>
        <Menu>
          <P onClick={()=>
          history.push('/list/TEAM')}>TEAM</P>
        </Menu>
        <Menu>
          <P onClick={()=>
          history.push('/list/ALGORITHM')}>ALGORITHM</P>
        </Menu>
        <Menu>
          <P onClick={()=>
          history.push('/list/SKY')}>SKY</P>
        </Menu>
        <Menu>
          <P onClick={()=>
          history.push('/list/COMMIT')}>COMMIT</P>
        </Menu>
        <Menu>
          <P onClick={()=>
          history.push('/list/FOOD')}>FOOD</P>
        </Menu>
        <Menu>
          <P onClick={()=>
          history.push('/list/DIARY')}>DIARY</P>
        </Menu>
      </Container>
      <Footer />
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
     height: 400px;
  margin: 0px 60px;
  //   /* background-color: blue; */
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: center;
 
`;

const P = styled.p`
  font-size: 100px;
  margin-top: 15px;
  color: white;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  cursor: pointer;
  display: inline-block;

  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  transition: 0.5s;
 

  &:hover {
    color: rgb(0, 0, 0);
    -webkit-transform: scale(1.6, 1.6);
    -moz-transform: scale(1.6, 1.6);
    -o-transform: scale(1.6, 1.6);
    -ms-transform: scale(1.6, 1.6);
    transform: scale(1.6, 1.6);
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
