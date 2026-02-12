function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
function debounce(fn,delay){
    let time;
    return function(...args){
        clearTimeout(time);
        time=setTimeout(() => {
           fn.apply(this,args); 
        }, delay);
    }
}