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

function addFriend() {
  let inputNameCollection = document.getElementsByClassName("input-name");

  let friend = inputNameCollection[0].value.trim();

  for (let i = 0; i < friendsList.length; i++) {
    if (friendsList[i] == friend) {
      alert("Nombre de amigo ya ingresado");
      return;
    }
  }

  if (friend != "") {
    friendsList.push(friend);
  }

  console.log(friendsList);
}
