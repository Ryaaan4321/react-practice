const arr=[1,2,3,4,5,8,8,8,8,8];
let ans=[];
arr.filter((number,idx,arr)=>{
    while(idx<arr.length){
        if(idx%2==0){
            ans.push(number);
            idx++;
        }
        idx++;
    }
})
let controller =new AbortController();
let signal=controller.signal;
signal
let ans2=[];
// arr.reduce((prev,curr,index,arr)=>{
//     console.log("from inside the reduce");
//     if(arr[index]%3==0){
//         prev+=curr;
//     }
//     index++;
//     console.log("currunt from the reduce == ",curr);
// })
let ans3=[];
arr.map((elm)=>{
    if(elm%2==0){
        ans2.push(elm);
    }
})
// arr.forEach((elm)=>{
//     if(elm%2==0){
//         console.log("value from the for each == ",elm);
//     }else{
//         console.log("not condition from the for each")
//     }
// })

let a=[];
let b=a;


let obj={
    name:"aa"
}
obj.aa=function(){
    // console.log("i am the function of the object");
    return 5;
}
// console.log("when we are calling == ",obj.aa());

let userName = 'John';

function showMessage() {
  let user = userName; 

  let message = 'Hello, ' + user;
//   console.log(message);
}
// console.log( userName );
showMessage();
// console.log( userName );



let fruit_array=["apple", "banana", "apple", "orange", "banana", "apple"]

let frequency_of_each_element_of_array=arr.reduce((acc,curr)=>{
  if(!acc[curr]){
    acc[curr]=1;
  }else{
    acc[curr]+=1;
  }
  return acc;
},{})

console.log(frequency_of_each_element_of_array);


let age_of_peoples= [
 {name:"A", age:20},
 {name:"B", age:21},
 {name:"C", age:20}
]
/*
Output:
{
  20: [{name:"A", age:20}, {name:"C", age:20}],
  21: [{name:"B", age:21}]
}
*/

let group_by_age=age_of_peoples.reduce((acc,curr)=>{
  let key=curr.age;
  if(!acc[key]){
    acc[key]=[];
  }
  acc[key].push(curr);
  return acc;
},{})

console.log(group_by_age);


let max_element_array= [1,2,2,3,3,3,4,1,1,1,1,1,1,1]

let max_element_map=new Map();
let mx_element_in_array=-1e9;
let freq=0;
let sm=arr.reduce((acc,curr)=>{
  if(!max_element_map.has(curr)){
    max_element_map.set(curr,1);
  }
  if(max_element_map.get(curr)>freq){
    freq=max_element_map.get(curr);
    mx=curr;
  }
  max_element_map.set(curr,max_element_map.get(curr)+1);
},{})

console.log(max_element_map);
console.log("mx == ",mx_element_in_array);






