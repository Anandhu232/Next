import React from 'react'

function Loginform(props) {
  console.log("Loginform props",props);
  
  return (
    <>
    <h1>Login data</h1>
    <p>Username :{props.formanme}</p>
    <p>Password :{props.forpassword}</p>
    </>
  )
}

export default Loginform