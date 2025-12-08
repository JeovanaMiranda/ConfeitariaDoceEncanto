// Carrega o header
fetch('/ConfeitariaDoceEncanto/components/nav/nav.html')
  .then(res => res.text())
  .then(data => document.getElementById('nav').innerHTML = data);

// Carrega o footer
fetch('/ConfeitariaDoceEncanto/components/footer/footer.html')
  .then(res => res.text())
  .then(data => document.getElementById('footer').innerHTML = data);
