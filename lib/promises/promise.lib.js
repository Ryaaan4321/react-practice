function checkAge(age) {
    return age >= 18 ?
        Promise.resolve("yes valid age") :
        Promise.reject("restricted")
}
function checkKYC(isBoolean) {
    return isBoolean ?
        Promise.resolve("Check") :
        Promise.reject("Not Check")
}
function checkBalance(amount) {
    return amount > 1000 ?
        Promise.resolve("has valid amount") :
        Promise.reject("not invalid amount")
}
function checkPermission(role) {
    return role === "user" ?
        Promise.resolve("has permission") :
        Promise.reject("not has permission")
}
function validateAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve("not minor")
            } else {
                reject("she is minor")
            }
        }, 1000);
    })
}
document.createElement
validateAge(199)
    .then(() => checkAge(19))
    .then(() => checkBalance(10000))
    .then(() => checkKYC(true))
    .then(() => checkPermission("admin"))
    .then(() => console.log("yes we can now go beyond this"))
    .catch((err) => alert(err))
    .finally(() => alert("made it to the final"))


function child(age) {
    return new Promise((resolve, reject) => {
        if (age <= 5) {
            resolve("he is child")
        } else {
            reject("he is not child")
        }
    })

}
function childToTeen(age) {
    return new Promise((resolve, reject) => {
        if (age >= 5 && age <= 18) {
            resolve("he is child or teen");
        } else {
            reject("he is not child or teen")
        }
    })

}
function jeeToSwe(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18 && age <= 24) {
            resolve("you shoudl have a job")
        } else {
            reject("what a waste of life ")
        }
    })
}
function Bhudapa(age) {
    return new Promise((resolve, reject) => {
        if (age >= 25) {
            resolve("you are budha")
        } else {
            reject("you are no budhaa")
        }
    })

}
function promiseCheck(age) {
    return new Promise((resolve, reject) => {
        if (age > 24) {
            resolve("made it")
        } else {
            reject("cant made it...")
        }
    })
}
// promise chaiining where if any any of them will fail than anything after that will 
// not be executed becuase the promise has already been settled.
promiseCheck(27)
    .then(child)
    .then(childToTeen)
    .then(jeeToSwe)
    .then(Bhudapa)
    .then(() => console.log(msg))
    .catch((err) => console.log("from the catch err = ", err));



/*
but if we have this kind of the promise where we have the .then
and the promise chainning than if the catch returns the value than
the chainning will be continues otherwise if the catch throws an error
or rejects than the chain will be broken and the promise will be resolved
below are the example of that..
*/
// . 1
Promise.resolve()
    .then(() => {
        console.log("step 1");
        throw new Error("boom");
    })
    .catch((err) => {
        console.log("caught:", err.message);
        return "recovered value";
    })
    .then((value) => {
        console.log("step 2:", value);
    })
    .finally(() => {
        console.log("cleanup");
    });
// . 2
Promise.reject("first error")
    .catch(() => {
        throw new Error("second error");
    })
    .then(() => {
        console.log("won’t run");
    })
    .catch((err) => {
        console.log("final catch:", err.message);
    });
