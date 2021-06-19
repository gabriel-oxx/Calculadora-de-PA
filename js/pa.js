document.getElementById("cabecalio").innerHTML = "Insira os termos de sua progressão aritmética abaixo" + "<br><br>";
function calculaPa() {
  var primeiroTermo = parseInt(document.getElementById("primeiro-termo").value);
  var razao = parseInt(document.getElementById("razao").value);
  var ultimoTermo = parseInt(document.getElementById("ultimo-termo").value);
  var valor = primeiroTermo;
  var resultado = document.getElementById("resultado");
  for (let i = 0; i <= ultimoTermo; i++) {
    valor += razao;
    resultado.innerHTML += '<p>' + valor + '</p>';
  }
}