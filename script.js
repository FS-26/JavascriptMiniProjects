let api_url = "https://jsonplaceholder.typicode.com/users";

async function getName(url) {
  fetch(url, { method: "GET" })
    .then((response1) => {
      return response1.json();
    })
    .then((res) => {
      for (let i = 0; i < 10; i++) {
        let user = res[i];
        console.log(user.name, user.email);
      }
    });
}

// async function addUser(url, user) {
//   let options = {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       " Content-type": "application/json",
//     },
//   };

//   fetch(url, options)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

let newUser = {
  name: "Houda el Houda",
  username: "luna",
  email: "luna@april.biz",
};
let options = {
  method: "POST",
  body: JSON.stringify(newUser),
  headers: {
    "Content-type": "application/json",
  },
};

fetch(api_url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
addUser(api_url, newUser);

document.querySelector("button").addEventListener("click", () => {
  getName(api_url);
});
