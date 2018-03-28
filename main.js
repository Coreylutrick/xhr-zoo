const PrintToDom = (domString, divId) => 
{
  document.getElementById(divId).innerHTML = domString;
};

// BUilds the string that is printed to the dom
const buildDomString = (animalArray) => 
{
  let domString = ""
  animalArray.forEach((animal) =>
  {
    if(animal.isCarnivore)
    {
      domString += `<div class="animal carnivore">`;
    } else {
      domString += `<div class="animal vegetable">`
    }
    domString +=  `<h1>${animal.name}</h1>`;
    domString +=  `<h3>${animal.number}</h3>`;
    domString +=  `<img class="animalImg" src="${animal.imageUrl}" alt="Image of animal"><br>`;
    domString +=  `<div class="button-container">`;
    domString +=    `<button class="escaped">Escaped</button>`;
    domString +=  `</div>`
    domString += `</div>`;
  });
  PrintToDom(domString, "animal-holder")
};

const animalsEscaped = () => 
{
  console.log(showCarnivores);
  showCarnivores();
  showVegetables()
};

//Event Listener
const addEscapedEventListener = () => 
{
  const escapedButtons = document.getElementsByClassName("escaped");
  for(let i = 0; i<escapedButtons.length; i++)
  {
    escapedButtons[i].addEventListener("click", animalsEscaped)
  }
};

//Escaped Animals function


//Carnivore and vegetable functions
const showCarnivores = () => 
{
  const carnivores = document.getElementsByClassName("carnivore");
  for (let j = 0; j<carnivores.length; j++)
  {
    carnivores[j].children[4].innerHTML = "";
    carnivores[j].classList.add("red");
  }
};

const showVegetables = () => 
{
  const vegetables = document.getElementsByClassName("vegetable");
  for (let j = 0; j<vegetables.length; j++)
  {
    vegetables[j].children[4].innerHTML = `<button>EAT ME!!!</button>`;
    vegetables[j].classList.add("green");
  }
};

//grabs the data and makes the array that im pulling from
function executeThisCodeAfterFileLoaded () 
{
  const data = JSON.parse(this.responseText);
  buildDomString(data.animals);
  addEscapedEventListener();
}

// only runs if there is an error
function executeThisCodeIfXHRFails () 
{
  console.log("something went wrong");
}

//function that runs the application to make it work
const startApp = () => 
{
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("get", "animals.json");
  myRequest.send();
};



startApp();