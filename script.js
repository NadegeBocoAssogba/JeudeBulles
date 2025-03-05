// import { couleuraleatoire } from "./functionrandomcolors.js";

let jeuActif = true;
let score = 0;

document.addEventListener("visibilitychange", () => {
  jeuActif = !document.hidden;
});
//Je crée une fonction pour générer les bulles de manière aléatoire.
function genererbulles() {
  if (!jeuActif) return;
  //créer une division bulle
  const bulle = document.createElement("div");
  document.body.appendChild(bulle);
  bulle.classList.add("bulle");
  //   définir une taille aléatoire pour les bulles
  let taille = Math.random() * 200 + 100;
  bulle.style.height = `${taille}px`;
  bulle.style.width = `${taille}px`;
  //définir une position aléatoire aux bulles
  bulle.style.left = Math.random() * 100 + "vw";

  // Définir une direction aléatoire (de gauche à droite ou inversement)

  let direction = Math.random() < 0.5 ? -1 : 1;
  let vitesse = Math.random() * 5 + 5; // Vitesse aléatoire entre 2 et 5s
  bulle.style.setProperty("--direction", direction);
  bulle.style.setProperty("--vitesse", vitesse + "s");

  // Animation pour que la bulle monte et disparaisse
  bulle.style.animation = `floatUp ${vitesse}s linear forwards`;
  bulle.addEventListener("animationend", () => bulle.remove());
  let scoretext = document.querySelector(".scoretext");
  bulle.addEventListener("click", () => {
    score++;
    scoretext.textContent = score;
    bulle.style.opacity = "0";
    bulle.remove();
  });
}
setInterval(genererbulles, 1000);
