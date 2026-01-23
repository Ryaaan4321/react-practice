//  Object.values ===============================
let user={
    name:"Johnn",
    age:25
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
for (let value of Object.values(user)){
    console.log(value);
}


function fun(){
    let sm=0;
    for(let sal of Object.values(salaries)){
        sm+=sal;
    }
    return sm;
}
console.log(fun());

// Object.keys =================================

for(let key of Object.keys(salaries)){
    console.log("key == ",key);
}

// console.log(typeof Object.entries(user))
let arr=Object.entries(user);
// console.log("arr tyep " , typeof arr)
Object.entries(user).map((u)=>{
    console.log(u);
    console.log("type of the u ",typeof u);
    console.log(" ");
})
for (let value of Object.values(user)){
    console.log(value);
}
function f(){
    let showArg=()=>console.log(arguments[0]);
    showArg();
}
f(1);

