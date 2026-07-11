const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// 1. Connexion automatique de tous les fichiers du dossier 'public'
app.use(express.static(path.join(__dirname, "public")));

// 2. Route principale qui envoie mon fichier index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 3. Exemple de route' " \ API pour mon site Ruphy
app.get("/api/info", (req, res) => {
  res.json({
    system: "Ruphy OS",
    status: "Online",
    version: "3.0",
  });
});

app.listen(PORT, () => {
  console.log(
    ` Maitre ruphin le serveur local host du site Ruphy est lancé sur\ http://localhost:${PORT}`,
  );
});
