// Etape pour faire une requete utilisateur et afficher dans la console
function handleresponse(response) {
  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  return response.json();
}
const handledata = (data) => {
  console.log(data);
};
function handleError(error) {
  console.error("la requete a echouer", error);
}
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleresponse(response))
    .then((data) => handledata(data))
    .catch((error) => handleError(error));
}

