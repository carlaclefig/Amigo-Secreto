let friendsList = [];

function assignClassText(clase, text) {
  let classHTML = document.querySelector(clase);
  classHTML.innerHTML = text;
  return;
}

function initialConditions() {
  assignClassText(".name-list", "Lista de amigos");
  assignClassText(".result-list", "El amigo secreto es ...");
}
initialConditions();

function updateList() {
  let listCollection = document.getElementsByClassName("name-list");
  let list = listCollection[0];
  list.innerHTML = "";

  friendsList.forEach((friendName) => {
    let li = document.createElement("li");
    li.textContent = friendName;
    list.appendChild(li);
  });
}

function cleanBox() {
  let inputNameCollection = document.getElementsByClassName("input-name");
  inputNameCollection[0].value = "";
}

function addFriend() {
  let inputNameCollection = document.getElementsByClassName("input-name");

  let friend = inputNameCollection[0].value.trim();
  let orientation = inputNameCollection[0];

  for (let i = 0; i < friendsList.length; i++) {
    if (friendsList[i] == friend) {
      alert("Nombre de amigo ya ingresado");
      cleanBox();
      orientation.focus();
      return;
    }
  }

  if (friend != "") {
    friendsList.push(friend);
    updateList();
    cleanBox();
    orientation.focus();
  }

  console.log(friendsList);
}
