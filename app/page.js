"use client"

import { useEffect } from "react";
import { useRef } from "react";

export default function Home() {
  const controller = new AbortController();
  const signal=controller.signal;
  const headingRef = useRef();
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
      <h1>Contents</h1>
      <h1 className="" id="elem" ref={headingRef}>hello hello </h1>
      <button onClick={noHi} className="bg-blue-800 text-white cursor-pointer"> hell hell</button>
    </div>
  );
}
