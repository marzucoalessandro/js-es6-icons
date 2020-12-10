$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
  const iconsList = [
     {
      name: "cat",
      prefix: `  <div>
        <i class="fas fa-cat"></i>
        <div class="title">CAT</div>
      </div>`,
      type: "",
      family: 'animal'
    },
    {
      name: "crow",
      prefix:  `  <div>
        <i class="fas fa-crow"></i>
        <div class="title">CROW</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "dog",
      prefix:  `  <div>
        <i class="fas fa-dog"></i>
        <div class="title">DOG</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "dove",
      prefix:  `  <div>
        <i class="fas fa-dove"></i>
        <div class="title">DOVE</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "dragon",
      prefix: `  <div>
        <i class="fas fa-dragon"></i>
        <div class="title">DRAGON</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "horse",
      prefix: `  <div>
        <i class="fas fa-horse"></i>
        <div class="title">HORSE</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "hippo",
      prefix: `  <div>
        <i class="fas fa-hippo"></i>
        <div class="title">HIPPO</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "fish",
      prefix: `  <div>
        <i class="fas fa-fish"></i>
        <div class="title">FISH</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "carrot",
      prefix:  `  <div>
        <i class="fas fa-carrot"></i>
        <div class="title">CARROT</div>
      </div>`,
      tipe: "",
      family: "vegetables"
    },
    {
      name: "apple",
      prefix:  `  <div>
        <i class="fas fa-apple-alt"></i>
        <div class="title">APPLE-ALT</div>
      </div>`,
      tipe: "",
      family: "vegetables"
    },
    {
      name: "lemon",
      prefix:  `  <div>
        <i class="fas fa-lemon"></i>
        <div class="title">LEMON</div>
      </div>`,
      tipe: "",
      family: "vegetables"
    },
    {
      name: "pepper",
      prefix:  `  <div>
        <i class="fas fa-pepper-hot"></i>
        <div class="title">PEPPER-HOT</div>
      </div>`,
      tipe: "",
      family: "vegetables"
    },
    {
      name: "astronaut",
      prefix: `  <div>
        <i class="fas fa-user-astronaut"></i>
        <div class="title">USER-ASTRONAUT</div>
      </div>`,
      type: "",
      family: "people"
    },
    {
      name: "graduate",
      prefix: `  <div>
        <i class="fas fa-user-graduate"></i>
        <div class="title">USER-GRADUATE</div>
      </div>`,
      type: "",
      family: "people"
    },
    {
      name: "ninja",
      prefix: `  <div>
        <i class="fas fa-user-ninja"></i>
        <div class="title">USER-NINJA</div>
      </div>`,
      type: "",
      family: "people"
    },
    {
      name: "secret-agent",
      prefix: `  <div>
        <i class="fas fa-user-secret"></i>
        <div class="title">USER-SECRET</div>
      </div>`,
      type: "",
      family: "people"
    },
  ];

  console.log(iconsList);
  // Semezioniamo il container icons
  const icons = $("div.icons");
  console.log(icons);
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  print(icons, iconsList);
});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
function print(container, array) {
console.log(container, array);
  array.forEach(function(elem) {
    let string = elem.prefix;
    container.append(string);
  })
};
