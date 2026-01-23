function sum(a,b){
    return a+b;
}
sum(1,2,3,4,5);
// output == 3 

function sumAll(...args){
    let sm=0;
    for(let v of args){
        sm+=v;
    }
    args.map((a)=>{
        console.log(a);
    })
}
sumAll(1);
sumAll(1,2);
sumAll(1,2,23,33,4,5,6);
sumAll(1,1,1,1,1,11,1,1,1,1,11,1,11,1,1,1,1,1,1,1,1,1,1);

// any number of parameters are possible in the sumAll() function
// so internally what it does is when we pass the argument like ...args
// than Javascript creates an array named args and puts 
// the arguments into it and that's why we can perform all
// the array operation also on it


function showName(firstName,lastName,...title){
    console.log(firstName);
    console.log(lastName);
    console.log(title[0]);
    console.log(title[1]);
    console.log(title[2]);
}
showName("a","b","aaa","aaaaaaa")
/*
now becuase in the title we are only passing the 2 arguments so technically 
only 0 and 1 are present so 2 is not present so it will be undefined.
*/

let obj={
    name:"aryab",
    classs:"8"
}
// console.log([...obj]);
console.log(Array.from(obj).map((a)=>{
    console.log(a);
}));