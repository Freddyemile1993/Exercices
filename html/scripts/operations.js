function calculer() {
  const firstNumberinput = document.getElementById("firstNumber");
  const secondNumberinput = document.getElementById("secondNumber");
  const operations = document.getElementById("operations");
  const firstvalue = Number(firstNumberinput.value);
  const secondvalue = Number(secondNumberinput.value);
  const valueofoperations = operations.value;
  let result;
  if (valueofoperations === "+") {
    result = firstvalue + secondvalue;
  }
  if (valueofoperations === "-") {
    result = firstvalue - secondvalue;
  }
  if (valueofoperations === "*") {
    result = firstvalue * secondvalue;
  }
  if (valueofoperations === "/") {
    result = firstvalue / secondvalue;
  }
  if (valueofoperations === "%") {
    result = firstvalue % secondvalue;
  }
  const resultelement = document.getElementById("resultat");
  resultelement.textContent = "le resultat est : " + result;
}
const btncalculer = document.getElementById("btncalculer");
btncalculer.addEventListener("click", calculer);
