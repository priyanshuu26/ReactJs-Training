import React, { useState, useEffect } from 'react';

function ToFetchData() {
  const [person, setPerson] = useState(null);
  const doSomething = async () => {
    const fetchUrl = await fetch('https://api.randomuser.me/');
    const data = await fetchUrl.json();
    const [item] = data.results;
    setPerson(item);
  };
  useEffect(() => {
    doSomething();
  }, []);

  return (
    <div>
      {person && (
        <>
          <h1>Welcome to the random name Generator</h1>
          <h4>(Refresh it to generate new name)</h4>
          <h1>
            {' '}
            Name : {person.name.first} {person.name.last}
          </h1>

          {/* <h1> Age : {person.dob.age}</h1> */}
        </>
      )}
    </div>
  );
}

export default ToFetchData;
