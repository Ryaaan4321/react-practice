"use client"

import { useEffect } from "react";

export default function Home() {
  function sayHi() {
    alert("hi")
  }
  function noHi() {
    document.head.
      document.head.d
    setTimeout(() => {
    }, 5000);
    document.body.style.background = "green"
  }
  useEffect(() => {
    let elm = document.getElementById("elem");
    elm.style.background = 'red';
    elm.style.color = 'white'

  }, [])
  return (
    <div>
      <h1 className="elem">hello hello </h1>
      <button onClick={noHi} className="bg-blue-800 text-white cursor-pointer"> hell hell</button>
    </div>
  );
}
