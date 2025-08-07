import React, {useState} from 'react';

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(); 
  }
  return (
    <div>
      <forn onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />
        <button type="submit">Login</button>
      </forn>
    </div>
  );
}

export default LoginForm;
