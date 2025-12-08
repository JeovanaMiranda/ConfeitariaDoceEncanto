// Carrega o header
fetch('/components/nav/nav.html')
  .then(res => res.text())
  .then(data => document.getElementById('nav').innerHTML = data);

// Carrega o footer
fetch('/components/footer/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);
