$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const iconsList = [
     {
      name: "cat",
      prefix: "fas",
      type: "fa",
      family: 'animal'
    },
    {
      name: "crow",
      prefix: "fas",
      type: "fa",
      family: "animal",
    },
    {
      name: "dog",
      prefix:  "fas",
      type: "fa",
      family: "animal"
    },
    {
      name: "dove",
      prefix:  "fas",
      type: "fa",
      family: "animal"
    },
    {
      name: "dragon",
      prefix: "fas",
      type: "fa",
      family: "animal"
    },
    {
      name: "horse",
      prefix: "fas",
      type: "fa",
      family: "animal"
    },
    {
      name: "hippo",
      prefix: "fas",
      type: "fa",
      family: "animal"
    },
    {
      name: "fish",
      prefix: "fas",
      type: "fa",
      family: "animal"
    },
    {
      name: "carrot",
      prefix: "fas",
      type: "fa",
      family: "vegetables"
    },
    {
      name: "apple-alt",
      prefix: "fas",
      type: "fa",
      family: "vegetables"
    },
    {
      name: "lemon",
      prefix: "fas",
      type: "fa",
      family: "vegetables"
    },
    {
      name: "pepper-hot",
      prefix: "fas",
      type: "fa",
      family: "vegetables"
    },
    {
      name: "user-astronaut",
      prefix: "fas",
      type: "fa",
      family: "people"
    },
    {
      name: "user-graduate",
      prefix: "fas",
      type: "fa",
      family: "people"
    },
    {
      name: "user-ninja",
      prefix: "fas",
      type: "fa",
      family: "people"
    },
    {
      name: "user-secret",
      prefix: "fas",
      type: "fa",
      family: "people"
    },
  ];

  // console.log(iconsList);

  // Semezioniamo il container icons
  const album = $("div.icons");

  // definiamo dei colori per le icone (blue, orange, purple)
  var blue = "blue";
  var orange = "orange";
  var purple = "purple";




  //aggiungiamo dei colori usando una funzione

  var NewList = iconsList.map(element => {
    // console.log(element);
    if (element.family === "animal") {
      var obj = {...element, color: blue}
    } else if (element.family === "vegetables") {
      var obj = {...element, color: orange}
    } else {
      var obj = {...element, color: purple}
    }

    return obj

  });
  console.log(NewList);

  //inseriamo le icone colorate nel container
  print(album, NewList);
});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1
function print(container, array) {
  array.forEach(elem => {

    const {name, prefix, type, color} = elem;

    container.append(  ` <div>
      <i class="${prefix} ${type}-${name}" style="color:${color}"></i>
      <div class="title">${name}</div>
      </div>`)
    })
  };

//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
