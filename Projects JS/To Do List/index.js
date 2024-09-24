const input=document.getElementById("input-box");
const list=document.getElementById("list-container");
const add_btn=document.querySelector(".btn_add");

add_btn.addEventListener("click", function addtask(){
    if(input.value==""){
        alert("you must insert Something..!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    savepoint();
})

list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savepoint()
    }
    else  if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savepoint()
    }
},false);

function savepoint(){
    localStorage.setItem("Data",list.innerHTML);
}
function showlist(){
    list.innerHTML=localStorage.getItem("Data");
}
showlist();
