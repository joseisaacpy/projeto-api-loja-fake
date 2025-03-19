// Chama o AOS
AOS.init();

// Função de pegar os dados
async function getData() {
  // tente
  try {
    // URL
    const url = "https://fakestoreapi.com/products";

    // Requisição
    const response = await fetch(url);

    // Dados
    const data = await response.json();

    // Variavel de container
    let containerElement = document.querySelector("main .container-products");

    // Manipulando os dados
    data.forEach((item) => {
      // Cria o item do card
      let itemElement = document.createElement("div");

      //   Adiciona a classe de item
      itemElement.classList.add("item");

      //   Adiciona aos no item
      itemElement.setAttribute("data-aos", "fade-up");

      // Cria estrutura do card
      itemElement.innerHTML = `
        <img src="${item.image}"/>
        <h2>${item.title}</h2>
        <p>${item.price}</p>
        <p>${item.description}</p>`;

      // Adiciona o item ao container
      containerElement.appendChild(itemElement);
    });
  } catch (error) {
    console.log(error);
  }
}

// Chama a função
getData();
