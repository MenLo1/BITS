// La flecha realizada con el signo = y el signo > indica una función.


document.getElementById("modo-oscuro").onclick = () => {
  document.body.classList.add("modo-oscuro")
}

document.getElementById("modo-claro").onclick = () => {
  document.body.classList.remove("modo-oscuro")
}
