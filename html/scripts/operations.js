// Creation de la fonction calculer et recuperation des elements de la page HTML
function calculer() {
  const nameInput = document.getElementById("name");
  const valueName = nameInput.value;
  const firstNumberInput = document.getElementById("firstnumber");
  const firstValue = Number(firstNumberInput.value);
  const secondNumberInput = document.getElementById("secondnumber");
  const secondValue = Number(secondNumberInput.value);
  const operations = document.getElementById("operations");
  const valueOfOperations = operations.value;
  const resultElement = document.getElementById("resultat");

  // Pose de garde four
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    resultElement.textContent = "Remplisez les deux champs s'il vous plait";
    return;
  }
  if (valueOfOperations === "") {
    resultElement.textContent = "Choisissez une operation";
    return;
  }
  if (
    (valueOfOperations === "/" || valueOfOperations === "%") &&
    secondValue === 0
  ) {
    resultElement.textContent = "La division par 0 est impossible";
    return;
  }

  // code pour une multitude de possibilite de calcul
  let result = 0;
  if (valueOfOperations === "+") result = firstValue + secondValue;
  else if (valueOfOperations === "-") result = firstValue - secondValue;
  else if (valueOfOperations === "*") result = firstValue * secondValue;
  else if (valueOfOperations === "/") result = firstValue / secondValue;
  else if (valueOfOperations === "%") result = firstValue % secondValue;

  // code pour afficher le resultat de calcul
  resultElement.textContent = "le résultat est, " + result;
}
// Code pour surveiller l'action de l'utilisateur
const btncalculer = document.getElementById("btncalculer");
btncalculer.addEventListener("click", calculer);
