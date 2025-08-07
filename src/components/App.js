import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // console.log("login")
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Child onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;