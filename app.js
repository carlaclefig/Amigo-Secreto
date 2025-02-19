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
