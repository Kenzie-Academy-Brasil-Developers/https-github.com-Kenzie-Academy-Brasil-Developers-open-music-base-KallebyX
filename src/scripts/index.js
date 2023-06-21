function createCard(product) {
    const card = document.createElement("li");
    card.classList.add("box")
    const image = document.createElement("img");
    image.classList.add('imgLi')
    image.src = product.img; 
    card.appendChild(image);

    const bandInfo = document.createElement("p");
    bandInfo.textContent = `${product.band} \n ${product.year}`; 
    card.appendChild(bandInfo);

    const albumTitle = document.createElement("h2");
    albumTitle.textContent = product.title; 
    card.appendChild(albumTitle);

    const priceContainer = document.createElement("span");
    const price = document.createElement("h2");
    price.classList.add("price")
    price.textContent = `R$: ${product.price.toFixed(2)}`;
    priceContainer.appendChild(price);

    const buyButton = document.createElement("button");
    buyButton.textContent = "Comprar";
    priceContainer.appendChild(buyButton);
    card.appendChild(priceContainer);

    return card;
}

function renderCards(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 
  
    products.forEach((product) => {
      const card = createCard(product);
      productList.appendChild(card);
    });
}

const buttonContainer = document.getElementById("product-list"); 
products.forEach((product) => {
    const card = createCard(product);
    buttonContainer.appendChild(card);
});

function renderButtons(categories) {
    const buttonContainer = document.getElementById("button-container");
  
    categories.forEach((category) => {
      const listItem = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = category;
      listItem.appendChild(button);
      buttonContainer.appendChild(listItem);

      button.addEventListener("click", () => {
        filterProductsByCategory(category);
      });
    });
}
  

function filterProductsByCategory(category) {
    const filteredProducts = products.filter((product) => {
      return product.category === category || category === "Todos";
    });
  
    clearProductList();
    renderCards(filteredProducts);
}

function clearProductList() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
}

renderButtons(categories);
renderCards(products);