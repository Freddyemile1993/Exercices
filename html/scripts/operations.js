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
  if (valueName.trim().split(" ").length < 2) {
    resultElement.textContent = "Entrez votre prénom et nom s'il vous plait";
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
  resultElement.textContent = "le résultat est " + result;

  // la concatenation des chaines de caracteres
  const nameAndResultat = `${valueName} ${result}`;
  resultElement.textContent = nameAndResultat;

  // Etape pour inserer mes initials au niveau du resultat
  const firstnameAndLastname = valueName.trim().split(" ");
  const initial = `${firstnameAndLastname[0][0]} ${firstnameAndLastname[1][0]}`;
  const decision = `${initial} ${result}`;
  resultElement.textContent = decision;

  // Etape pour faire apparaitre mes initials dans un cercle
  const abreviation = document.getElementById("initial");
  abreviation.textContent = initial;
  const noms = {
    "+": "la somme de",
    "-": "la soustraction de",
    "*": "le produit de",
    "/": "la division de",
    "%": "le modulo de",
  };
  resultElement.textContent = `${valueName} ${noms[valueOfOperations]} ${firstValue} et de ${secondValue} égale à ${result}`;
}

// Code pour surveiller l'action de l'utilisateur
const btncalculer = document.getElementById("btncalculer");
btncalculer.addEventListener("click", calculer);
