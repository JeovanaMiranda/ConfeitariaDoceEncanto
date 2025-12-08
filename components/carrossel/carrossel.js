function initCarrossel(containerId, jsonPath) {
  let produtos = [];
  let currentIndex = 0;
  let itemsPerView = 4;

  const container = document.getElementById(containerId);
  const grid = container.querySelector(".cards-grid");
  const indicadoresContainer = container.querySelector(".indicadores");
  const btnPrev = container.querySelector(".btn-prev");
  const btnNext = container.querySelector(".btn-next");

  function updateItemsPerView() {
    if (window.innerWidth >= 1024) itemsPerView = 4;
    else if (window.innerWidth >= 768) itemsPerView = 3;
    else itemsPerView = 1;
  }

  function render() {
    updateItemsPerView();
    const maxIndex = Math.max(0, produtos.length - itemsPerView);

    grid.innerHTML = "";
    const visibles = produtos.slice(currentIndex, currentIndex + itemsPerView);

    visibles.forEach(produto => {
      grid.innerHTML += `
        <div class="card-produto">
          <img src="${produto.imagem}" alt="${produto.nome}">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <div class="card-comprar">
            <p class="card-preco">R$ ${produto.preco}</p>
            <button class="btn-adicionar">Adicionar</button>
          </div>
        </div>
      `;
    });

    indicadoresContainer.innerHTML = "";
    for (let i = 0; i <= maxIndex; i++) {
      indicadoresContainer.innerHTML += `
        <button class="indicador ${i === currentIndex ? 'ativo' : ''}" onclick="goTo_${containerId}(${i})"></button>
      `;
    }

    btnPrev.style.display = currentIndex === 0 ? "none" : "flex";
    btnNext.style.display = currentIndex === maxIndex ? "none" : "flex";
  }

  window["goTo_" + containerId] = function(index) {
    currentIndex = index;
    render();
  };

  btnPrev.onclick = () => {
    currentIndex = Math.max(0, currentIndex - 1);
    render();
  };

  btnNext.onclick = () => {
    const maxIndex = Math.max(0, produtos.length - itemsPerView);
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    render();
  };

  window.addEventListener("resize", render);

  // Carregar JSON
  fetch(jsonPath)
    .then(res => res.json())
    .then(data => {
      produtos = data;
      render();
    });
}
