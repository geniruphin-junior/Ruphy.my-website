// definitions des boutons des langages
const python = document
  .querySelector("#btn-py")
  .addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=rfscVS0vtbw");
  });

const cpp = document.querySelector("#btn-cpp").addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=ZzaPdXTrSb8");
});
const back = document
  .querySelector("#btn-backend")
  .addEventListener("click", () => {
    window.open("");
  });
const frontend = document.querySelector("#");
// Fonction vocale "Pro" pour Ruphy
function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  utter.pitch = 0.8; // Voix un peu plus grave et technologique
  utter.rate = 1.1;
  synth.speak(utter);
}

// Effet de console au chargement
window.onload = () => {
  console.log(
    "%c RUPHY SYSTEM ONLINE ",
    "background: #00d4ff; color: #000; font-weight: bold;",
  );
};
function ouvrirLivre(titre, texte) {
  // 1. On cache la grille de cours pour laisser place au livre
  document.querySelector(".grid-container").style.display = "none";
  document.querySelector(".hero").style.display = "none";

  // 2. On affiche la visionneuse et on remplit le contenu
  const box = document.getElementById("visionneuse-livre");
  box.style.display = "block";
  document.getElementById("titre-livre").innerText = titre;
  document.getElementById("contenu-livre").innerText = texte;

  speak("Ouverture du livre de " + titre);
}

function fermerLivre() {
  document.getElementById("visionneuse-livre").style.display = "none";
  document.querySelector(".grid-container").style.display = "grid";
  document.querySelector(".hero").style.display = "block";
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("fr-FR");
  document.querySelector(".time").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Lance immédiatement

function speak(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
}
