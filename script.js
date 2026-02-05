// Images du slider
let images = [
  "images/ramadan1.jpg",
  "images/ramadan2.jpg",
  "images/ramadan3.jpg"
];

let index = 0;

// Rappels islamiques
let rappels = [
  {
    ar: "﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ ﴾",
    fr: "Ô vous qui avez cru ! Le jeûne vous a été prescrit."
  },
  {
    ar: "الصلاة نور",
    fr: "La prière est une lumière."
  },
  {
    ar: "رَمَضَانُ شَهْرُ الصَّبْرِ",
    fr: "Ramadan est le mois de la patience."
  },
  {
    ar: "اذكروا الله يذكركم",
    fr: "Invoquez Allah, Il se souviendra de vous."
  },
  {
    ar: "خيركم من تعلم القرآن وعلمه",
    fr: "Les meilleurs d'entre vous sont ceux qui apprennent le Coran et l'enseignent."
  }
];

let rappelIndex = 0;

// Changer image
function changerImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  document.getElementById("slide").src = images[index];
}

// Message
function message() {
  document.getElementById("textMessage").innerHTML =
    "✨ رمضان مبارك — Qu'Allah accepte vos jeûnes, vos prières et vos invocations.";
}

// Afficher rappel
function afficherRappel() {
  document.getElementById("rappelAr").innerHTML = rappels[rappelIndex].ar;
  document.getElementById("rappelFr").innerHTML = rappels[rappelIndex].fr;

  rappelIndex++;
  if (rappelIndex >= rappels.length) {
    rappelIndex = 0;
  }
}

// Slider automatique toutes les 4 secondes
setInterval(changerImage, 4000);
