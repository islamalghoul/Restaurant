arr=[];
counter=1000
function id()
{
    counter++
    return counter
}
function foodTable(foodId,foodName,type,price){
this.foodId=foodId
this.foodName=foodName
this.type=type
this.price=price
arr.push(this)
}
let obj= new foodTable("1125","21k","9ihk","155") 
foodTable.prototype.table=function(){
let table =document.getElementById("table")
let tr=document.createElement("tr")
tr.className="tr"
table.appendChild(tr);
let td=document.createElement("td");
td.textContent=this.foodId
tr.appendChild(td)
 td=document.createElement("td");
td.textContent=this["foodName"]
tr.appendChild(td)
td=document.createElement("td");
td.textContent=this["type"]
tr.appendChild(td)
td=document.createElement("td");
td.textContent=this["price"]
tr.appendChild(td)



}
 form=document.getElementById("form")
form.addEventListener("submit",newLest)

function newLest(e){
e.preventDefault();
let foodId= id();
let foodName=e.target.name.value
let type=e.target.typesOfTheFood.value
let price=e.target.Price.value
let obj= new foodTable(foodId,foodName,type,price) 
obj.table()
}
