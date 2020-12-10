$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
  const iconsList = [
     {
      name: "cat",
      prefix: `  <div>
        <i class="fas fa-cat" style="color:blue"></i>
        <div class="title">CAT</div>
      </div>`,
      type: "",
      family: 'animal'
    },
    {
      name: "crow",
      prefix:  `  <div>
        <i class="fas fa-crow" style="color:blue"></i>
        <div class="title">CROW</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "dog",
      prefix:  `  <div>
        <i class="fas fa-dog" style="color:blue"></i>
        <div class="title">DOG</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "dove",
      prefix:  `  <div>
        <i class="fas fa-dove" style="color:blue"></i>
        <div class="title">DOVE</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "dragon",
      prefix: `  <div>
        <i class="fas fa-dragon" style="color:blue"></i>
        <div class="title">DRAGON</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "horse",
      prefix: `  <div>
        <i class="fas fa-horse" style="color:blue"></i>
        <div class="title">HORSE</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "hippo",
      prefix: `  <div>
        <i class="fas fa-hippo" style="color:blue"></i>
        <div class="title">HIPPO</div>
      </div>`,
      type: "",
      family: "animal"
    },
    {
      name: "fish",
      prefix: `  <div>
        <i class="fas fa-fish" style="color:blue"></i>
        <div class="title">FISH</div>
      </div>`,
      type: "",
      family: "animal"
    }
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
