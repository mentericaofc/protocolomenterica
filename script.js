/* ============================= */
/* ANIMAÇÃO REVEAL */
/* ============================= */

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));

/* ============================= */
/* INFOBOX SOCIAL */
/* ============================= */

const nomes = [
  "joaovfx", "maria.fit", "lucas_7x", "ana.dark",
  "pedro.lima", "rafa.crypto", "brunoxp", "carol.vision",
  "gui.trader", "matheus_zn", "bia.mindset", "thiago.fx",
  "juliana.empreende", "leo.money", "victor.ai",
  "nath.fit", "danilo.7k", "camila.ofc",
  "henrique.crypto", "paula.vision",
  "felipe.mkt", "andre.dark", "renata.fx",
  "gustavo.money", "isabela.trader",
  "kaique.fx", "marina.dark", "vitor_7x", "luana.money",
  "enzo.ai", "rafael.mkt", "bruna.crypto", "diego.trader",
  "igorsales", "leticia.vision", "caio.ofc", "samuel.fx",
  "yasmin.mind", "arthur.money", "duda.dark",
  "rodrigo.ai", "paulo.trader", "aline.crypto",
  "kevin.mkt", "natanael.fx", "sofia.vision",
  "felps.money", "thi.dark", "bianca.ofc"
];

const mensagens = [
  "entrou agora",
  "acabou de acessar",
  "adquiriu o material"
];

const infobox = document.getElementById("infobox");

function mostrarInfobox() {
  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

  infobox.textContent = `${nomeAleatorio} ${mensagemAleatoria}`;
  infobox.classList.add("show");

  setTimeout(() => {
    infobox.classList.remove("show");
  }, 4000);
}

function loopInfobox() {
  mostrarInfobox();
  const tempoAleatorio = Math.floor(Math.random() * (30000 - 15000)) + 15000;
  setTimeout(loopInfobox, tempoAleatorio);
}

loopInfobox();

/* ============================= */
/* DESTAQUE AUTOMÁTICO RESULTADOS */
/* ============================= */

const resultadoCards = document.querySelectorAll(".resultado-card");
let indexResultado = 0;

if (resultadoCards.length > 0) {
  setInterval(() => {
    resultadoCards.forEach(card => card.classList.remove("ativo"));
    resultadoCards[indexResultado].classList.add("ativo");
    indexResultado = (indexResultado + 1) % resultadoCards.length;
  }, 2500);
}

const welcome = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enter-site");

enterBtn.addEventListener("click", () => {
  welcome.style.opacity = "0";
  welcome.style.pointerEvents = "none";

  setTimeout(() => {
    welcome.style.display = "none";
  }, 400);
});
