// Fonction vocale "Pro" pour Ruphy
const speak = (text) => {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  utter.pitch = 0.8; // Voix un peu plus grave et technologique
  utter.rate = 1.1;
  synth.speak(utter);
};

// Effet de console au chargement
window.onload = () => {
  console.log(
    "%c RUPHY SYSTEM ONLINE ",
    "background: #00d4ff; color: #000; font-weight: bold;",
  );
};
const ouvrirLivre = (titre, texte) => {
  // 1. On cache la grille de cours pour laisser place au livre
  document.querySelector(".grid-container").style.display = "none";
  document.querySelector(".hero").style.display = "none";

  // 2. On affiche la visionneuse et on remplit le contenu
  const box = document.getElementById("visionneuse-livre");
  box.style.display = "block";
  document.getElementById("titre-livre").innerText = titre;
  document.getElementById("contenu-livre").innerText = texte;

  speak("Ouverture du livre de " + titre);
};

f;
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("fr-FR");
  document.querySelector(".time").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Lance immédiatement
