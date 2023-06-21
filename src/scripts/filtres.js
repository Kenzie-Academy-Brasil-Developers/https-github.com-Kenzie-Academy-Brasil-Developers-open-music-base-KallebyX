function filterProductsByCategory(category, priceFilter) {
    const filteredProducts = products.filter((product) => {
      return (
        (product.category === category || category === 0) &&
        product.price <= parseFloat(priceFilter)
      );
    });
  
    clearProductList();
    renderCards(filteredProducts);
}
  
function clearProductList() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
}
  
function addPriceFilterEvent() {
    const priceInput = document.querySelector(".bar");
    const priceText = document.querySelector("#tituloTexto p");
    const buttonContainer = document.getElementById("button-container");
  
    priceInput.addEventListener("input", function () {
      priceText.textContent = `Até R$ ${priceInput.value}`;
  
      const selectedCategoryButton = buttonContainer.querySelector(".selected");
      const selectedCategory =
        selectedCategoryButton !== null
          ? parseInt(selectedCategoryButton.dataset.category)
          : 0;
  
      filterProductsByCategory(selectedCategory, priceInput.value);
    });
  
    const maxPrice = Math.max(...products.map((product) => product.price));
    priceInput.max = maxPrice;
    priceText.textContent = `Até R$ ${maxPrice}`;
}

addPriceFilterEvent();