import React from 'react';

function RegistrationForm() {
  return (
    <div>
      <h1>Registration From</h1>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" />
        </div>
        <div>
          Gender :
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="male">Female</label>
        </div>
        <div>
          Programming Languages:
          <input type="checkbox" id="c" name="Programming Language" value="c" />
          <label htmlFor="Programming Language">C</label>
          <input
            type="checkbox"
            id="java"
            name="Programming Language"
            value="java"
          />
          <label htmlFor="Programming Language">Java</label>
          <input
            type="checkbox"
            id="Python"
            name="Programming Language"
            value="Python"
          />
          <label htmlFor="Programming Language">Python</label>
          <input
            type="checkbox"
            id="javascript"
            name="Programming Language"
            value="javascript"
          />
          <label htmlFor="Programming Language">Javascript</label>
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
