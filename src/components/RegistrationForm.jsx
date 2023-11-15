import React, { useState } from 'react';

function RegistrationForm() {
  const [userRegistration, setUserRegistration] = useState({
    name: '',
    age: '',
    gender: '',
    programminglanguage: [],
    username: '',
    password: '',
  });
  const [records, setRecords] = useState([]);
  const [language, setLanguage] = useState([]);
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const handleInput = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setLanguage([...language, value]);
      }
    }
    if (name === 'password' && value.length < 8) {
      setPasswordError('Password should be minimum 8 characters');
    } else {
      setPasswordError('');
      setUserRegistration({ ...userRegistration, [name]: value });
    }
    if (name === 'name' && !/^[a-zA-Z\s]+$/i.test(value)) {
      setNameError('Invalid Name');
    } else {
      setNameError('');
      setUserRegistration({ ...userRegistration, [name]: value });
    }

    setUserRegistration({ ...userRegistration, [name]: value });
    console.log(`${name} : ${value} : ${checked}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      programminglanguage: { ...language },
    };
    setRecords([...records, newRecord]);
    console.log(language);
  };
  return (
    <div>
      <h1>Registration From</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInput}
            value={userRegistration.name}
          />
          <div className="error">{nameError}</div>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={handleInput}
            value={userRegistration.age}
          />
        </div>
        <div>
          Gender :
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInput}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInput}
          />
          Female
        </div>
        <div>
          Programming Languages:
          <input
            type="checkbox"
            name="programminglanguage"
            value="c"
            onChange={handleInput}
          />
          <label htmlFor="programminglanguage">C</label>
          <input
            type="checkbox"
            name="programminglanguage"
            value="java"
            onChange={handleInput}
          />
          <label htmlFor="programminglanguage">Java</label>
          <input
            type="checkbox"
            name="programminglanguage"
            value="python"
            onChange={handleInput}
          />
          <label htmlFor="programminglanguage">Python</label>
          <input
            type="checkbox"
            name="programminglanguage"
            value="javascript"
            onChange={handleInput}
          />
          <label htmlFor="programminglanguage">Javascript</label>
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleInput}
            value={userRegistration.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInput}
            value={userRegistration.password}
          />
          <div className="error">{passwordError}</div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
