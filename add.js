async function addProduct(event) {
  event.preventDefault();
  const inputImg = document.querySelector("[name=img]").value;
  const inputPrice = document.querySelector("[name=price]").value;
  const inputTitle = document.querySelector("[name=title]").value;

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
    } else {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("[type=submit]").addEventListener("click", addProduct);
