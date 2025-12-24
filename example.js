let form = document.getElementById("loginForm");
let output = document.getElementById("output");
form.addEventListener("submit",function(e)
{
    e.preventDefault();
    let name = document.getElementById("username").value;
    if(name ===""){
        alert("Enter name");
    } else{
        localStorage.setItem("username",name);
        output.innerText ="Welcome"+name;
    } 
});
let savename=localStorage.getItem("username");
if(saveName){
    output.innerText="Welcome back"+saveName;
}