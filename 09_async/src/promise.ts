const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  }
  reject("error, it broke");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hi 100");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Hi 1000");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Hi 3000");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

promise
  .then((result) => {
    return `${result}!`;
  })
  .then((result2) => {
    return `${result2}?`;
  })
  .catch((err) => console.log(err))
  .then((result3) => console.log(`${result3}!`));

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/users",
];

Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((results) => {
        console.log("results");

        console.log(results[0]);
        console.log(results[1]);
        console.log(results[2]);
      });
  })
).catch((err) => console.log(err));
