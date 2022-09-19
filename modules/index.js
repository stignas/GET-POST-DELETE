async function fetchData() {
  const data = await fetch("https://golden-whispering-show.glitch.me");
  const dataJSON = await data.json();
  dataJSON.forEach((product) => {
    createProductCard(product);
  });
  console.log(dataJSON);
}

function createProductCard(product) {
  const containerElement = document.getElementById("container");
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.dataset.id = `${product.id}`;

  const imgElement = document.createElement("img");
  imgElement.src = product.image;

  const titleElement = document.createElement("h4");
  titleElement.innerText = product.title;

  const priceElement = document.createElement("p");
  priceElement.innerText = `€${product.price}`;

  const buttonElement = document.createElement(`button`);
  buttonElement.dataset.id = `${product.id}`;
  buttonElement.innerText = "Ištrinti";

  buttonElement.addEventListener("click", deleteProduct);

  productElement.append(imgElement, titleElement, priceElement, buttonElement);
  containerElement.append(productElement);
}

async function deleteProduct(event) {
  const deleteId = event.target.dataset.id;
  try {
    const response = await fetch(
      "https://golden-whispering-show.glitch.me/" + deleteId,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      const products = document.getElementsByClassName("product");
      for (let i = 0; i < products.length; i++) {
        if (products[i].dataset.id === deleteId) {
          document.getElementById("container").removeChild(products[i]);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();
