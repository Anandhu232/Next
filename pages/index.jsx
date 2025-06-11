import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Loginform from "@/Components/Loginform";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(7);
  const [password, setPassword] =useState("")
  const [email, setEmail] =useState("")
  console.log("Name",name);
  console.log("Password",password);
  function handlename(event){
    setName(event.target.value);
  }
  function handlepass(event){
    setPassword(event.target.value)
  }
  // function handleemail(event) {
    // setEmail(event.target.value)
  // }
  function handllesubmit() {
    if (password.length < 8){
      alert("Password must be atleast 8 caharacters")
      return;
    }
    
  }
  return (
    <>
    <p>Enter your name:</p><input type="text" onChange={handlename}/>
    {/* <p>Enter your email :</p><input type="text" onChange={handleemail} /> */}
      <p>Your password is </p> <input type="password" onChange={handlepass}/>
      <button onClick={handllesubmit}>Submit</button>
    </>
  );
}
