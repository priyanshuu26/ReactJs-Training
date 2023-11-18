import React, { useState } from 'react';

function LoginPage() {
  const [data, setdata] = useState({
    username: '',
    password: '',
  });
  const [log, setLog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleClick = () => {
    if (data.username === 'priyanshu' && data.password === '123') {
      setLog(!log);
    } else {
      alert('entered the wrong credentials');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className={log ? 'data' : ''}>
          Username:
        </label>
        <input
          type="text"
          name="username"
          placeholder="enter - priyanshu"
          className={log ? 'data' : ''}
          value={data.username}
          onChange={handleChange}
        />
        <label htmlFor="password" className={log ? 'data' : ''}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="enter - 123"
          value={data.password}
          onChange={handleChange}
          className={log ? 'data' : ''}
        />
        <button type="button" onClick={handleClick}>
          {log ? 'logOut' : 'logIn'}
        </button>
      </form>
      <h1 className={log ? '' : 'data'}>Welcome To Our Website</h1>
    </div>
  );
}

export default LoginPage;
