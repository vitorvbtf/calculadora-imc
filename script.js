function escopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function recebaEvento(event) {
    event.preventDefault();
    const peso = document.querySelector(".peso");
    let altura = document.querySelector(".altura"); 
    let cor = "white";
    if (altura.value == "" && peso.value == "") {
      console.log("passou aqui");
      resultado.innerHTML = `<div style="background-color:red; border-radius: 4px; color:white"> Peso inválido <br> Altura inválida </div>`;
    } else if (altura.value == "") {
      resultado.innerHTML = `<div style="background-color:red; border-radius: 4px; color:white"> Altura inválida </div>`;
    } else if (peso.value == "") {
      resultado.innerHTML = `<div style="background-color:red; border-radius: 4px; color:white"> Peso inválido </div>`;
    } else {

    altura = altura.value / 100
    let imc = peso.value / (altura * altura);

   

      function calculoImc(imc) {
        if (imc > 40) {
          cor = "#ff5232";
          return `Obesidade grau 3`;
        } else if (imc >= 35) {
          cor = "#ff7b5a";
          return `Obesidade grau 2`;
        } else if (imc >= 30) {
          cor = "#ff7b5a";
          return `Obesidade grau 1`;
        } else if (imc >= 25) {
          cor = "#FFFACD";
          return `Sobrepeso`;
        } else if (imc >= 18.5) {
          cor = "#98FB98";
          return `Peso normal`;
        } else if (imc > 1) {
          cor = "#FA8072";
          return `Abaixo do peso`;
        } else {
          return `Peso inválido`;
        }
      }

      calculoImc(imc); //Invoquei a função para a variavel cor ser alterada

      resultado.innerHTML = `<div style="background-color:${cor}; border-radius: 4px;"> O seu IMC é ${imc.toFixed(
        1
      )}, (${calculoImc(imc)}) </div>`;
    }
  }
  
  form.addEventListener("submit", recebaEvento);
}
escopo();
