function createCard(product) {
  const card = document.createElement("li");
  card.classList.add("box");
  const image = document.createElement("img");
  image.classList.add("imgLi");
  image.src = product.img;
  card.appendChild(image);
  
  const bandInfo = document.createElement("p");
  bandInfo.textContent = `${product.band}\n${product.year}`;
  card.appendChild(bandInfo);
  
  const albumTitle = document.createElement("h2");
  albumTitle.textContent = product.title;
  card.appendChild(albumTitle);
  
  const priceContainer = document.createElement("span");
  const price = document.createElement("h2");
  price.classList.add("price");
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
  
function renderButtons(categories) {
  const buttonContainer = document.getElementById("button-container");
  
  categories.forEach((category, index) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("buttons");
    button.textContent = category;
    button.dataset.category = index;
    button.addEventListener("click", () => {
      const selectedButton = buttonContainer.querySelector(".selected");
      if (selectedButton !== null) {
        selectedButton.classList.remove("selected");
      }
      button.classList.add("selected");
      filterProductsByCategory(index, document.querySelector(".bar").value);
    });
    listItem.appendChild(button);
    buttonContainer.appendChild(listItem);
  });
}
  
renderButtons(categories);
renderCards(products);
  