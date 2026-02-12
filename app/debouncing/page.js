"use client"
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    console.log("args == ",args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
    console.log(timer);
  };
}

function test(fn,delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer=setTimeout(() => {
            fn.apply(this,args);
            console.log("this == ",this);
        }, delay);
    }
}

const debouncedSearch = test((e) => {
  console.log("Searching:", e.target.value);
}, 500);

export default function Page() {
  return (
    <input
      placeholder="Type here..."
       onKeyUp={debouncedSearch}
    />
  );
}
