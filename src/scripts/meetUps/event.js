// event listeners
let meetUpsButton = document.querySelector(".meetUpsButton")

meetUpsButton.addEventListener("click", () => {
  // targets the value in my dropdown options
  let formDateValue = document.querySelector("#meetUpDates").value
  let splitDate = formDateValue.split(",")
  console.log(splitDate)
    getDate(splitDate)
    
  })

  