const create_btn=document.querySelector(".create");
const note_container=document.querySelector(".note_contain");
let notes= document.querySelectorAll(".input_box");

function showNotes(){
    note_container.innerHTML=localStorage.getItem("note_sheets");
}
showNotes();

function udpate_storage(){
    localStorage.setItem("note_sheets",note_container.innerHTML);
}

create_btn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let dustbin=document.createElement("img");
    inputbox.className="input_box";
    inputbox.setAttribute("contenteditable","true");
    dustbin.src="/bin.png";
    note_container.appendChild(inputbox).appendChild(dustbin);
})
note_container.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        udpate_storage();
     }
     else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input_box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                udpate_storage();
            }
        })
     }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

