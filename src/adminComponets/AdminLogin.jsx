import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const adminCredentials = {
      username: 'admin',
      password: 'admin123',
    };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      // Set authentication status and current time in localStorage
      localStorage.setItem('isAdminAuthenticated', 'true');
      localStorage.setItem('loginTime', Date.now()); // Store the login time
      navigate('/adminpage');  // Redirect to /adminpage after login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center p-10 bg-gray-950">
      <div className="xl:w-1/2 rounded-2xl border border-green-600 md:shadow-xl bg-white">
        <div className="grid md:grid-cols-2 p-5">
          <div>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-10299071-8333958.png?f=webp" alt="Admin Login" />
          </div>
          <div className="flex items-center justify-center">
            <form onSubmit={handleOnSubmit}>
              <h1 className="text-center text-2xl font-extrabold uppercase text-rose-500">Admin login</h1>
              <br />
              <input 
                type="text"
                className="mb-3 w-full rounded-2xl bg-zinc-100 outline-green-400 px-5 py-3" 
                placeholder="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password"
                className="mb-3 w-full rounded-2xl bg-zinc-100 outline-green-400 px-5 py-3" 
                placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="mb-3 w-full rounded-2xl hover:bg-green-600 bg-green-500 px-5 py-3 font-semibold text-white">
                Login
              </button>
              {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
