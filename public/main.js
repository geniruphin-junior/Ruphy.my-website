// Lance l'horloge et la met à jour toutes les 1000ms (1 seconde)
setInterval(updateClock, 1000);
updateClock(); // Appel immédiat pour éviter le délai de 1s au chargement

// Fonction vocale "Pro" pour Ruphy
function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "fr-FR";
  utter.pitch = 0.8; // Voix un peu plus grave et technologique
  utter.rate = 1.1;
  synth.speak(utter);
}

function simulerCompilation() {
  speak(
    "Initialisation du compilateur C plus plus... Vérification des dépendances... Compilation réussie.",
  );
  alert("🚀 Code C++ compilé avec succès (Simulation)");
}
function demarrerJava() {
  // 1. Message vocal pro
  speak(
    "Démarrage de la machine virtuelle Java. Chargement du Bytecode Ruphy.",
  );

  // 2. Simulation technique dans la console (Appuie sur F12 pour voir)
  console.log(" [SYSTEM] Initializing JVM...");
  console.log(" [SYSTEM] Loading: java.lang.Object");
  console.log(" [SYSTEM] Loading: ruphy.science.Main");

  // 3. Alerte visuelle pour l'utilisateur
  setTimeout(() => {
    alert(
      "☕ [JVM] Java Virtual Machine lancée avec succès.\nCode exécuté en 0.004s",
    );
    console.log(" [SUCCESS] Execution finished.");
  }, 500);
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
