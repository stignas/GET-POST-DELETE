async function addProduct(event) {
  event.preventDefault();
  const inputImg = document.querySelector("[name=img]").value.trim();
  const inputPrice = document.querySelector("[name=price]").value.trim();
  const inputTitle = document.querySelector("[name=title]").value.trim();

  const headers = { "Content-type": "application/json" };
  const postBody = JSON.stringify({
    image: inputImg,
    title: inputTitle,
    price: inputPrice,
  });

  try {
    const response = await fetch("https://golden-whispering-show.glitch.me", {
      method: "POST",
      headers: headers,
      body: postBody,
    });
    if (response.ok) {
      alert("Produktas sėkmingai pridėtas");
      window.location.replace("./index.html");
    }
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("[type=submit]").addEventListener("click", addProduct);
