import React from 'react'
import Loginform from './Loginform'
import { useState } from 'react'

function index() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  console.log("count", count);
  console.log("name", name);

  const [password, setPassword] = useState("");
  console.log("password", password);

  const [email, setEmail] = useState("");
  console.log("email", email);

  function handleName(event) {
    setName(event.target.value);
  }

  function handlePass(event) {
    setPassword(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit() {
    if (password.length < 8) {
      alert("The password must contain atleast 8 characters");
    } else {
      alert("Success");
    }
    return;
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <p>User name:<input type='text' onChange={handleName} /></p>
      <p>Password:<input type='password' onChange={handlePass} /></p>
      <p>Email id:<input type='email' onChange={handleEmail} /><br /></p>
      <button onClick={handleSubmit}>Submit</button>
      
      <Loginform formname={name} formpassword={password} />
    </>
  );
}

export default index;