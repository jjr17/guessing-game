// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btn-try"); 
const btnReset = document.querySelector("#btn-reset");
let randomNumber = Math.round(Math.random() * 10); 
let xAttempts = 1; 

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', pressEnter);

// Funções callback
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão

  const inputNumber = document.querySelector("#input-number");

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`;
  }

  if(inputNumber.value > 10 || inputNumber.value < 0) {
    alert('Digite um número entre 0 e 10!');
    xAttempts;
  } 

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function pressEnter(event) {
  if(event.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

