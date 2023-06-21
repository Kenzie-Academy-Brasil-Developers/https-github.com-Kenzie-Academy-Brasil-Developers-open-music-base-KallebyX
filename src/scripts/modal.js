const openModalButton = document.querySelector('.buttonNav');
const closeModalButton = document.querySelector('.closeModal');
const cancelButton = document.querySelector('.cancelar');
const insertButton = document.querySelector('.incerirButton');
const entradaButton = document.querySelector('.entrada');
const saidaButton = document.querySelector('.saida');

function abrirModal() {
  const modal = document.querySelector('.modal__controller');
  modal.showModal();
  modal.style.top = '30%';
}

function fecharModal() {
  const modal = document.querySelector('.modal__controller');
  modal.close();
  modal.style.top = '-100%';
}

function addValue() {
  const inputBox = document.querySelector('.placeHolder');
  const valor = parseFloat(inputBox.value);
  const entradaButtonSelected = entradaButton.classList.contains('selected');
  const saidaButtonSelected = saidaButton.classList.contains('selected');

  inputBox.value = "";
  inserirNovoValor(valor, entradaButtonSelected ? 0 : 1);
  fecharModal();

  if (entradaButtonSelected) {
    renderizarValores();
    calcularSomaValores();
  } else if (saidaButtonSelected) {
    filtrarValoresPorID(1);
    renderizarValoresFiltrados();
    calcularSomaValoresFiltrados();
  }
}

openModalButton.addEventListener('click', abrirModal);
closeModalButton.addEventListener('click', fecharModal);
cancelButton.addEventListener('click', fecharModal);
insertButton.addEventListener('click', addValue);

entradaButton.addEventListener('click', () => {
  entradaButton.classList.add('selected');
  saidaButton.classList.remove('selected');
});

saidaButton.addEventListener('click', () => {
  saidaButton.classList.add('selected');
  entradaButton.classList.remove('selected');
});