const arr = [2, 3, 18, 0, 10];

let ans = arr.reduce((sum, current) => sum + current);
console.log(ans);

const asynPipe =
    (...functions) =>
        (initialValue) =>
            functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));


const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"] },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];

const allBooks=friends.reduce((acc,cur)=>[...acc,...cur.books]);