import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import MyProvider from './Handlers/provider';
import styled from 'styled-components';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    aling-content: center;
  `
  const Header = styled.header`
    display: flex;
    justify-content: center;
    aling-content: center;
  `

  if(isLoading) return <h1>Loading...</h1>
  
  return (
    <MyProvider>
      <Header>
        {isAuthenticated ? <NavBar/> : <Login/>}
      </Header>
      <Main className="App">
        {isAuthenticated ? <Home/> : <></>}
      </Main>
    </MyProvider>
  );
}

/*
* Estructura de nodos / componentes del projecto:
**************************************************************
**************************************************************
**                     **                                   **
**                    ****                                  **
**                   *NODE*                                 **
**                    ****                                  **
**                     **                                   **
**                 **********                               **
**                 **      **                               **
**                ****    ****                              **
**               *NODE*--*NODE*                             **
**                ****    ****                              **
**                 **      **                               **
**                 **      ******************               **
**                 **             **       **               **
**                 **             **       **               **
**                ****           ****     ****              **
**               *NODE* ------- *NODE* - *NODE*             **
**                ****           ****     ****              **
**                 **             **       **               **
**                 **         *********                     **
**                 **         **     **                     **
**                ****       ****   ****                    **
**               *NODE* --- *NODE*-*NODE*                   **
**                ****       ****   ****                    **
**                 **         **     **                     **
**                                                          **
**************************************************************
**************************************************************
                   
*/

export default App;