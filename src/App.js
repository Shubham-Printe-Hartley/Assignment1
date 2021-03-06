import { useEffect } from 'react';
import Container from './views/container';
import Home from './views/home/home';
import './App.css';
import {useSelector} from "react-redux";

function App() {

  const userLogin = useSelector((state) => {
    return state.userLogin
  });

  // watching userLogin to re-render App 
  useEffect(() => [userLogin]);

  // can be improved by checking for access_token inside of local storage
  if(!userLogin?.data?.access_token && !localStorage.getItem('userLogin')){
    return (
      <div className="login-page-wrapper">
        <Container />
      </div>
    )
  }
  return (
    <div className="login-page-wrapper">
      <Home />
    </div>
  );
}

export default App;
