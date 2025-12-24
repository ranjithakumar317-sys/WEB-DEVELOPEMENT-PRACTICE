 function addTask()
 {
    let task=document.getElementById("task").value;
    let list=document.getElementById("list");
    if(task==="")
    {
        alert("Enter task");
        return;
    }
    let li = document.createElement("li");
    li.innerText=task;
    let btn= document.createElement("button");
    btn.innerText="delete";
    btn.onclick=function()
    {
        list.removeChild(li);
    }
    li.appendChild(btn);
    list.appendChild(li);
    document.getElementById("task").value="";
}