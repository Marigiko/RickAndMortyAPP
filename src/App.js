import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import MyProvider from './Components/provider';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) return <h1>Loading...</h1>
  
  return (
    <MyProvider>
      <div className="App">
        {isAuthenticated ? <NavBar/> : <Login/>}
        {isAuthenticated ? <Home/> : <img/>}
      </div>
    </MyProvider>
  );
}

export default App;