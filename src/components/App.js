
import React, {useState} from "react";
import LoginForm from './LoginForm.js'
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
        {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>you are logged in !</p>
      ): (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
