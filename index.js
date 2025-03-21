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
      // itemElement.innerHTML = `
      //   <img src="${item.image}"/>
      //   <h2>${item.title}</h2>
      //   <p>${item.price}</p>
      //   <p>${item.description}</p>
      //   <a href="https://api.whatsapp.com/send?phone=5586995177653&text=Ol%C3%A1,%20estou%20interessado(a)%20no%20produto%20[NOME_DO_PRODUTO].%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es?" target="_blank">Comprar <i class="fa-solid fa-cart-shopping"></i></a>`;
      itemElement.innerHTML = `
      <figure>
        <img src="${item.image}" alt="${item.title}"/>
      </figure>
      <h2>${item.title}</h2>
      <p class="description">${item.description}</p>
      <p class="price"><strong>R$ ${item.price.toFixed(2)}</strong></p>
   <a href="https://api.whatsapp.com/send?phone=558695816051&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20produtos!" target="_blank">
  Comprar <i class="fa-solid fa-cart-shopping"></i>
</a>

    `;

      // Adiciona o item ao container
      containerElement.appendChild(itemElement);
    });
  } catch (error) {
    console.log(error);
  }
}

// Chama a função
getData();
