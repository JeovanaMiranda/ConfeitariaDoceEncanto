
fetch('/components/nav/nav.html')
  .then(res => res.text())
  .then(data => document.getElementById('nav').innerHTML = data);

fetch('/components/footer/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);



function carregarCarrossel(jsonPath, containerId) {
  fetch('/components/carrossel/carrossel.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
      initCarrossel(containerId, jsonPath);
    })
    .catch(err => console.error("Erro ao carregar carrossel:", err));
}



const script = document.createElement('script');
script.src = "/components/carrossel/carrossel.js";

script.onload = () => {
  console.log("carrossel.js carregado com sucesso!");


  carregarCarrossel("/components/carrossel/data/bebidas.json", "carrossel1");
  carregarCarrossel("/components/carrossel/data/comidas.json", "carrossel2");
  carregarCarrossel("/components/carrossel/data/doces.json", "carrossel3");
};

script.onerror = () => {
  console.error("Falha ao carregar carrossel.js");
};

document.body.appendChild(script);
