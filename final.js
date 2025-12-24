//Load saved data
let expenses = JSON.parse(localStorage.getItem("expense")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
//-------------EXPENSES FUNCTIONS-----------
function addExpense()
{
    let name = document.getElementById("expName").value;
    let amount = document.getElementById("expAmount").value;
    if(name === "" || amount === "")
    {
        alert("Enter all fields");
        return;
    }
    function addExpenses(){
    let expense = {
        name: name,
        amount: Number(amount)
    };
    expenses.push(expense);
    localStorage.setItem("expenses",JSON.stringify(expenses));
displayExpenses();
}
function displayExpenses()
{
let list = document.getElementById("expenselist");
let total = 0;
list.innerHTML = "";
expenses.forEach(function(exp,index)
{
    let li =document.createElement("li");
    li.innerText = exp.name +" - ₹"+ exp.amount;
     list.appendChild(li);
    total += exp.amount;
   
});
document.getElementById("toal").innerText = total;
}
displayExpenses();
}