$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
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

  console.log(iconsList);
  // Semezioniamo il container icons
  const album = $("div.icons");


  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  print(album, iconsList);

});

/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup


function print(container, array) {
  array.forEach(elem => {

    const {name, prefix, type} = elem;

    container.append(  ` <div>
      <i class="${prefix} ${type}-${name}" style="color:blue"></i>
      <div class="title">${name}</div>
      </div>`)
    })
  };
