setTimeout(() => {
    console.log("console from the timeout")
}, 0);

console.log("from the console.log");

const prom=new Promise((res,rej)=>{
    res("console from the promise res");
    rej("console from the promise rej");
})