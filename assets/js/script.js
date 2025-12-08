document.addEventListener("DOMContentLoaded", () => {
  // espera a navbar estar carregada
  const navContainer = document.getElementById("nav");

  if (!navContainer) return;

  // se você inseriu o HTML da navbar via JS, faça isso depois
  navContainer.innerHTML = `
    <nav class="navbar">
      <img src="../../assets/img/logos/LogoHorizontal.png" class="logo" />
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
      <ul class="nav-links" id="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
      </ul>
    </nav>
  `;

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    console.log("Menu clicado!");
  });

  console.log("Navbar ativada!");
});
