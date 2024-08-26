import { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Attempting login with:', { username, password });

    try {
      const response = await axios.post('/api/admins/login', { username, password });
      console.log('Response from server:', response.data);

      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setError('');
    } catch (err) {
      console.error('Error response:', err.response);
      setError('Login failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
