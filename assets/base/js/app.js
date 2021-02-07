// variables


// http class instance
let http = new EasyHttp();
let ui = new Ui();

// eventListeners
loadAllEvents();

function loadAllEvents() {

  document.addEventListener('DOMContentLoaded', getPost);

  ui.itemArea.addEventListener('click' , btnBuy)

}


// functions

// get data
function getPost() {
  http.get('https://reqres.in/api/users')
    .then(users => ui.setItems(users))
    .catch(error => console.log(error))
}

// buy
function btnBuy(e) {
  if(e.target.classList.contains('btn-buy')) {
    var id = e.target.parentElement.previousElementSibling.children[1].textContent.split(':')[1];
  }

  http.get(`https://reqres.in/api/users/${id}`)
  .then(users => ui.buyGenerate(users))
  .catch(error => console.log(error))
}