"use client"

import { useEffect, useState } from "react";
import { useRef } from "react";
import Element from "@/components/CreateaElement";

export default function Home() {
  const controller = new AbortController();
  const signal=controller.signal;
  const headingRef = useRef();
  function sayHi() {
    alert("hi")
  }
  const [count,setCount]=useState(0);
  const [cnt,setcnt]=useState(0);
  function batching(){
    setCount(prev=>prev+1);
    setcnt(prev=>prev+1);
  }
  function noHi() {
    document.head.
      document.head.d
    setTimeout(() => {
    }, 5000);
    document.body.style.background = "green"
  }
  function Hi() {
    document.head.
      document.head.d
    setTimeout(() => {
    }, 5000);
    document.body.style.background = "red"
  }
  useEffect(() => {
    const response=fetch('some website',{
      signal:signal.aborted
    })
    alert("dom loaded")
    let elm = document.getElementById("elem");
    elm.addEventListener("click", noHi)
    elm.removeEventListener("click", noHi);
  })
  return (
    <div>
      <Element/>
      <h1>Contents</h1>
      {cnt}
      <br></br>
      {count}
      <h1 className="" id="elem" ref={headingRef}>hello hello </h1>
      <button onClick={batching} className="bg-blue-800 text-white cursor-pointer"> hell hell</button>
    </div>
  );
}
