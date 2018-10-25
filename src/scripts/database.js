// food api search options

  let BBQ = {
    name: "BBQ",
    id: 193
  }
  let Burger = {
    name: "Burger",
      id: 168
  }
  let Cajun = {
    name: "Cajun",
      id: 491
  }
  let Chinese = {
    name: "Chinese",
    id: 25
  }
  let Ethiopian = {
    name: "Ethiopian",
      id: 149
  }
  let Indian = {
    name: "Indian",
      id: 148
  }
  let Italian = {
    name: "Italian",
    id: 55
  }
  let Mexican = {
    name: "Mexican",
    id: 73
  }
  let Pizza = {
    name: "Pizza",
    id: 82
  }
  let Tapas = {
    name: "Tapas",
    id: 179
  }

console.log(Tapas.id)
let foodSection = document.getElementById("foodOptions")
let foodButton = document.getElementById("foodButton")

foodButton.addEventListener("click", ()=> {
  let clickValue = foodSection.options[foodSection.selectedIndex].value
  let searchTheFood = foodSearch(clickValue);
  foodFetch(searchTheFood)
})

function foodFetch (food) {
  if ()
 
}
// let name = document.querySelector(".foodOptions").innerHTML
// console.log(name)


// fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${.id}`, {
//   headers: {
//     "Content-Type": "application/json",
//     "user-key": "96eabc6c9e55bec13dea468806aa7e48"
//   }
// }))