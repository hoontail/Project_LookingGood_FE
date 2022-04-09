import {BrowserRouter, Route} from "react-router-dom"
import styled from 'styled-components';
import Signup from './pages/Signup';
import Login from './pages/Login';
import logo from './imagegroup/logo.png'

function App() {
  return (
    <Container>
      <Header></Header>
      <Logo src={logo}/>
      <Box>
        <BrowserRouter>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
        </BrowserRouter>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fefefe;
`

const Header = styled.header`
  height: 100px;
`

const Logo = styled.img`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 100px;
`

const Box = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: center;
`

export default App;
