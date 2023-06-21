
function calcularSomaValores() {
    const somaElement = document.querySelector('.soma');
    const soma = insertedValues.reduce((total, valor) => total + parseFloat(valor.value), 0);
  
    
    const somaValorElement = document.createElement('p');
    somaValorElement.classList.add('textoSoma');
    somaValorElement.textContent = 'Soma dos valores:';
  
    const valorElement = document.createElement('p');
    valorElement.classList.add('valorSoma');
    valorElement.textContent = `R$${soma.toFixed(2)}`;
  
    somaElement.innerHTML = '';
    somaElement.appendChild(somaValorElement);
    somaElement.appendChild(valorElement);
}

function renderizarValores() {
    const boxCardsElement = document.querySelector('.render');
    boxCardsElement.innerHTML = '';
  
    insertedValues.forEach((valor) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      const valorElement = document.createElement('p');
      valorElement.classList.add('value');
      const typeElement = document.createElement('p');
      typeElement.classList.add('type');
      const trashElement = document.createElement('button');
      trashElement.classList.add('trash');
      const trashIconElement = document.createElement('img');
      trashIconElement.src = './src/assets/trash.svg';
      trashIconElement.alt = 'Lixeira';
  
      const category = valuesCategory[valor.categoryID];
      valorElement.textContent = `R$: ${valor.value.toFixed(2)}`;
      typeElement.textContent = category;
  
      trashElement.appendChild(trashIconElement);
      cardElement.appendChild(valorElement);
      cardElement.appendChild(typeElement);
      cardElement.appendChild(trashElement);
      boxCardsElement.appendChild(cardElement);
      trashElement.addEventListener('click', () => {
        cardElement.remove();
        removerValor(valor.id);
      });
    });
}
  

function inserirNovoValor(valor, categoriaID) {
    const novoValor = {
      id: insertedValues.length + 1,
      value: valor,
      categoryID: categoriaID,
    };
    insertedValues.push(novoValor);
    renderizarValores();
    calcularSomaValores();
}

function removerValor(id) {
    insertedValues = insertedValues.filter(valor => valor.id !== id);
    renderizarValores();
    calcularSomaValores();
}

function addValue() {
  const inputBox = document.querySelector('.placeHolder');
  const valor = parseFloat(inputBox.value);
  const categoriaID = document.querySeslector('.selected');

  inputBox.value = valor;
  inserirNovoValor(valor, categoriaID);
  fecharModal();
}

function filtrar() {
    const allButton = document.querySelector('.allButton');
    const entradaButton = document.querySelector('.entradaButton');
    const saidaButton = document.querySelector('.saidaButton');
  
    allButton.addEventListener('click', () => {
      renderizarValores();
      calcularSomaValores();
    });
  
    entradaButton.addEventListener('click', () => {
      filtrarValoresPorID(0);
      renderizarValoresFiltrados();
      calcularSomaValoresFiltrados();
    });
  
    saidaButton.addEventListener('click', () => {
      filtrarValoresPorID(1);
      renderizarValoresFiltrados();
      calcularSomaValoresFiltrados();
    });
}

let insertedValuesfiltered = [];

function filtrarValoresPorID(categoriaID) {
    insertedValuesfiltered = insertedValues.filter(valor => valor.categoryID === categoriaID);
}
  

function renderizarValoresFiltrados() {
    const boxCardsElement = document.querySelector('.render');
    boxCardsElement.innerHTML = ''; 
  
    insertedValuesfiltered.forEach((valor) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      const valorElement = document.createElement('p');
      valorElement.classList.add('value');
      const typeElement = document.createElement('p');
      typeElement.classList.add('type');
      const trashElement = document.createElement('button');
      trashElement.classList.add('trash');
      const trashIconElement = document.createElement('img');
      trashIconElement.src = './src/assets/trash.svg';
      trashIconElement.alt = 'Lixeira';
    
      const category = valuesCategory[valor.categoryID];
      valorElement.textContent = `R$: ${valor.value.toFixed(2)}`;
      typeElement.textContent = category;
  
      trashElement.appendChild(trashIconElement);
      cardElement.appendChild(valorElement);
      cardElement.appendChild(typeElement);
      cardElement.appendChild(trashElement);
      boxCardsElement.appendChild(cardElement);
      trashElement.addEventListener('click', () => {
        cardElement.remove();
        removerValor(valor.id);
      });
    });
}
  

function calcularSomaValoresFiltrados() {
    const somaElement = document.querySelector('.soma');
    const soma = insertedValuesfiltered.reduce((total, valor) => total + parseFloat(valor.value), 0);
  
    const somaValorElement = document.createElement('p');
    somaValorElement.classList.add('textoSoma');
    somaValorElement.textContent = 'Soma dos valores:';
  
    const valorElement = document.createElement('p');
    valorElement.classList.add('valorSoma');
    valorElement.textContent = `R$${soma.toFixed(2)}`;
  
    somaElement.innerHTML = '';
    somaElement.appendChild(somaValorElement);
    somaElement.appendChild(valorElement);
}


function renderizar() {
    renderizarValores();
    calcularSomaValores();
    filtrar();
}

renderizar();
