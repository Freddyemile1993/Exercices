// etape pour faire une requete utilisateur et l'afficher sur un tableau
function handleresponse(response) {
  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  return response.json();
}
function handleError(error) {
  console.error(" La requette a échoué", error);
}
const handledata = (data) => {
  console.log(data);
  // le texte qui va contenir toutes les lignes du tableau
  let tablelines = "";
  // la boucle : une ligne de tableau par utilisateur
  for (let index = 0; index < data.length; index++) {
    const user = data[index];
    const tableline = `
<tr>
<td> ${user.name}</td>
<td> ${user.phone}</td>
<td> ${user.email}</td>
</tr>
`;
    tablelines += tableline;
  }
  // Affichage dans la page après la boucle
  document.getElementById("users-body").innerHTML = tablelines;
};

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleresponse(response))
    .then((data) => handledata(data))
    .catch((Error) => handleError(Error));
}
