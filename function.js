const saveBtn = document.getElementById("save");

const calculateImc = () => {
  const weight = document.getElementById("weightTxt").value;
  const height = document.getElementById("heightTxt").value;
  if (!isInvalid()) {
    console.log(weight, height);
    let imc = (
      parseFloat(weight) /
      (parseFloat(height) * parseFloat(height))
    ).toFixed(2);
    printResult(imc);
    const listClasses = clearTable();
    switch (true) {
      case imc > 0 && imc <= 18.4:
        console.log("entro");
        listClasses[0].classList.add("bg-warning");
        break;
      case imc >= 18.5 && imc <= 24.9:
        console.log("entro");
        listClasses[1].classList.add("bg-success");
        break;
      case imc > 25 && imc <= 29.9:
        console.log("entro");
        listClasses[2].classList.add("bg-orange");
        break;
      case imc > 30:
        console.log("entro");
        listClasses[3].classList.add("bg-danger");
        break;
      default:
        break;
    }
    console.log("Tu IMC es de: " + imc);
  } else {
    alert(
      "Parece que algo anda mal con tus datos por favor revisalos: los datos no puedes ser 0, no pueden ser texto, y no quedarse vacios, revisa esto e intenta de nuevo"
    );
  }
};
const printResult = (result) => {
   document.getElementById("result").innerHTML="Tu IMC es: " + result
}
const btnValidation = () => {
  const btn = document.getElementById("save");
  if (isInvalid()) btn.setAttribute("disabled", true);
  else btn.removeAttribute("disabled");
};

const clearTable = () => {
  const listClasses = [
    document.getElementById("yellow-bp"),
    document.getElementById("green-n"),
    document.getElementById("orange-sp"),
    document.getElementById("red-o"),
  ];
  listClasses.forEach((element) =>
    element.classList.remove(
      "bg-warning",
      "bg-success",
      "bg-orange",
      "bg-danger"
    )
  );
  return listClasses;
};

const clearAll = () => {
  clearTable();
  document.getElementById("weightTxt").value = "";
  document.getElementById("heightTxt").value = "";
  btnValidation();
  document.getElementById("result").innerHTML=" "
};

const isInvalid = () => {
  let weight = document.getElementById("weightTxt").value;
  let height = document.getElementById("heightTxt").value;
  if (!weight || !height) return true;
  if (weight <= 0 || height <= 0) return true;
  if (isNaN(weight) || isNaN(height)) return true;
  return false;
};

const signal = (event) => {
  if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46)
    return true;
  else return false;
};
