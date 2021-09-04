import './App.css';

import { useState } from 'react';

import Restrcitedpage from "./componentes/Restrictedpage"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const user = "Rafael";

  const login = ()=> setIsLoggedIn(true);
  const logout = ()=> setIsLoggedIn(false);

  return (
    <div className="App">
      <header className="App-header">
        <Restrcitedpage isLoggedIn = {isLoggedIn}
         user={user} Login={login} Logout={logout}/>
      </header>
    </div>
  );
}

export default App;
