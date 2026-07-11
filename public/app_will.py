from flask import Flask, render_template, request, jsonify, session, redirect
import os
import json
from chat_engine_will import traiter_message  # Permet au front ou Node de communiquer

app = Flask(__name__)
app.secret_key = "elia_secret_key_2026"

DATA_FOLDER = "data"
os.makedirs(DATA_FOLDER, exist_ok=True)

# Route pour poser une question à l'IA
@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
   
    # Logique simple de l'IA
    response = traiter_message(question)
   
    return jsonify({"response": response})

# =========================
# GESTION MEMOIRE UTILISATEUR
# =========================

def get_memory_file(username):
    return os.path.join(DATA_FOLDER, f"{username}_memory.json")


def charger_memoire(username):
    memory_file = get_memory_file(username)
    if not os.path.exists(memory_file):
        return []

    with open(memory_file, "r", encoding="utf-8") as f:
        return json.load(f)


def sauvegarder_message(username, auteur, message):
    memory_file = get_memory_file(username)
    data = charger_memoire(username)

    data.append({
        "auteur": auteur,
        "message": message
    })

    with open(memory_file, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)


# =========================
# ROUTE LOGIN + CHAT
# =========================

@app.route("/", methods=["GET", "POST"])
def index():

    # Si on envoie le formulaire login
    if request.method == "POST":
        username = request.form.get("username")
        session["username"] = username
        return redirect("/")

    username = session.get("username")

    # 🔥 Si pas connecté → LOGIN OBLIGATOIRE
    if not username:
        return render_template("login.html")

    historique = charger_memoire(username)

    return render_template("index.html",
                           historique=historique,
                           username=username)


# =========================
# ROUTE ENVOI MESSAGE
# =========================

@app.route("/send", methods=["POST"])
def send():

    username = session.get("username")

    if not username:
        return jsonify({"response": "Erreur : utilisateur non connecté."})

    data = request.get_json()
    user_message = data.get("message")

    # Sauvegarde message utilisateur
    sauvegarder_message(username, username, user_message)

    # Réponse IA
    response = traiter_message(user_message)

    # Sauvegarde réponse IA
    sauvegarder_message(username, "Elia", response)

    return jsonify({"response": response})


# =========================
# LOGOUT
# =========================

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)