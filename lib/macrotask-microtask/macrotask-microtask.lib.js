setTimeout(() => {
    console.log("console from the timeout")
}, 1000);

console.log("from the console.log");

const prom=new Promise((res,rej)=>{
    res("console from the promise res");
    rej("console from the promise rej");
})