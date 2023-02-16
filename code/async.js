function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "John" });
            } else {
                reject("User not found");
            }
        }, 2000);
    });
}
const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    // Perform an asynchronous operation
    setTimeout(() => {

        if (randomNumber > 0) {
            // Resolve the promise with the resulting value
            resolve(randomNumber);
        } else {
            // Reject the promise with an error message
            reject("Error: The number is too high");
        }
    }, 1000);
});
// fetchUser(1)
//     .then(user => console.log(user))
//     .catch(error => console.error(error));
//
// fetchUser(2)
//     .then(user => console.log(user))
//     .catch(error => console.error(error));
//
// console.log("Fetching user...");

//
// myPromise
//     .then(result => console.log(`The result is: ${result}`))
//     .catch(error => console.error(error));
// console.log("This line prints first")


function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}

fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(error => console.error(error));

console.log("Fetching data...");