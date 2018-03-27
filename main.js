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
    domString += `<div>`;
    domString += `<h1>${animal.name}</h1>`;
    domString += `</div>`;
  });
  PrintToDom(domString, "animal-holder")
};

//grabs the data and makes the array that im pulling from

function executeThisCodeAfterFileLoaded () 
{
  const data = JSON.parse(this.responseText);
  buildDomString(data.animals);

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