import React from 'react';

const Child = ({ onLogin }) => {
  return (
    <>
      <form>
      <label htmlFor="name">Username:</label>
      <input type="text" id="name" />
      <br />
      <label htmlFor="pass">Password:</label>
      <input type="password" id="pass" />
      <br />
      <button onClick={onLogin}>Login</button>
      </form>
    </>
  );
};

export default Child;