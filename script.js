let url = "https://jsonplaceholder.typicode.com/todos";
/* 
fetch(url)
  .then((response1) => {
    return response1.json();
  })
  .then((res) => {
    console.log(res);
  });
 */

// créer UL
let ul = document.createElement("ul");
document.body.appendChild(ul);

async function getApiData(url) {
  // recupérer les donner avec fetch
  let data = await fetch(url);
  /*la methode json() permet de convertir le resutat reçu en objet JSON 
   la methode json() renvoie une nouvelle promesse qu'on va recupérer
  */
  let data2 = await data.json();

  for (let i = 0; i < 10; i++) {
    let todo = data2[i];

    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `<span style='color: green'>${todo.id}</span>| <strong>${todo.title}</strong> |<input type='checkbox'/>`;
    // console.log(data2[i]);
  }
}

let button = document.querySelector("button");
button.addEventListener("click", function () {
  getApiData(url);
});
