let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let request=urls.map(url=>fetch(url));
Promise.all(urls.map(url=>
    fetch(url).then(response=>{
        if(response.ok){
            throw new Error(`${response.status} ${response.url}`)
        }
        return response;
    })
))
.then(responses=>responses.forEach(r=>{
    alert(`${r.status} ${r.url}`)
}))
.catch(error=>alert(error.message));

/*
.all waits for all promises to resolve and returns an array of their results. 
If any of the given promises rejects, it becomes the error of Promise.all, 
and all other results are ignored.

.allSettled waits for all promises to settle and returns their results as an array of objects with:
status: "fulfilled" or "rejected"
value (if fulfilled) or reason (if rejected).

Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
Promise.any(promises) (recently added method) –
waits for the first promise to fulfill, and its result becomes the outcome. 
If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
*/

Promise.allSettled(
  urls.map(url => fetch(url))
)
.then(responses =>
  responses.forEach(r =>
    console.log(`${r.url} ${r.status}`)
  )
)
.catch(err => {
  console.error("Fetch failed:");
  console.error(err.cause ?? err);
});

function sayHi(){
    console.log("hi hi hi hi")
}
const a=5;
window.sayHi();
console.log(window.a);

