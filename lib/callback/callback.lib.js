function test(age, succ, fail,) {
    if (age > 16) {
        succ("success");
    } else {
        fail("failed");
    }
}
test(18, (msg) => console.log(msg), (msg) => console.log(msg));

function fetchData(user, fn) {
    console.log("inside the fetch data waiting for 3 seconds");
    setTimeout(fn, 3000);
}
fetchData(user, () => {
    Object.values(user).map((u) => {
        console.log(u);
    })
})
// and if we want to make the fetchData the owner of the data than
function fetchData(user, fn) {
    console.log("inside fetchData, waiting for 3 seconds");
    setTimeout(() => {
        fn(user);
    }, 3000);
}

fetchData(user, (data) => {
    Object.values(data).forEach(v => {
        console.log(v);
    });
});
const user = {
    email: "a@gmail.com",
    password: "aa"
}
const userProfile = {
    name: "aryan",
    posts: 10,
    friend: 100
}
const getUserPost = {
    posts: 10,
    metaData: 20
}
function loginuser(user, cb) {
    setTimeout(() => {
        console.log(user);
        cb(user);
    }, 1000)
}
function getUserProfile(profile, cb) {
    setTimeout(() => {
        console.log(profile);
        cb(profile)
    }, 10000);
}
function getUserPosts(posts, cb) {
    setTimeout(() => {
        console.log(posts);
        cb(posts);
    }, 1000);
}
loginuser(user, () => {
  getUserProfile(user, () => {
    getUserPosts(userProfile, () => {
      setTimeout(() => {
        console.log("Another async step");
      }, 1000);
    });
  });
});
