let arr = [];
let counter = 1000
function id() {
    counter++
    return counter
}
function foodTable(foodId, foodName, type, price) {
    this.foodId = foodId
    this.foodName = foodName
    this.type = type
    this.price = price
    arr.push(this)
    

// foodTable.prototype.table = function () {
//     let table = document.getElementById("table")
//     let tr = document.createElement("tr")
//     tr.className = "tr"
//     table.appendChild(tr);
//     let td = document.createElement("td");
//     td.textContent = this.foodId
//     tr.appendChild(td)
//     td = document.createElement("td");
//     td.textContent = this["foodName"]
//     tr.appendChild(td)
//     td = document.createElement("td");
//     td.textContent = this["type"]
//     tr.appendChild(td)
//     td = document.createElement("td");
//     td.textContent = this["price"]
//     tr.appendChild(td)
// }


form = document.getElementById("form")
form.addEventListener("submit", newLest)
function newLest(e) {
    e.preventDefault();
    let foodId = id();
    let foodName = e.target.name.value
    let type = e.target.typesOfTheFood.value
    let price = e.target.Price.value
    let obj = new foodTable(foodId, foodName, type, price)
    saveData(arr);
    
   
}

  function saveData(data) {
    let obj=localStorage.getItem("obj")
    if(obj != null)
     {
        let array=JSON.parse(obj) // we are getting the current data in obj key
        array.push(data.pop()); // get the last object in data (arr)      
       localStorage.setItem("obj", JSON.stringify(array));
    }
    else
    localStorage.setItem("obj", JSON.stringify(data)); // first submit click




}

// function useData() {
//     let revers = localStorage.getItem("obj");
//     arrayOfLocal = JSON.parse(revers) []

//     if (arrayOfLocal == null)
//     arrayOfLocal=[0]
//     else   
//     {
  
//         for (let i = 0; i < arrayOfLocal.length; i++) {
//             new foodTable(arrayOfLocal[i].foodId,
//                  arrayOfLocal[i].foodName,
//                   arrayOfLocal[i].type, 
//                   arrayOfLocal[i].price)
//                   arr[i].table()
             

//         }
//     }
      
// }
// useData()
/*
{ [asd]}
*/


