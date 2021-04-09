let c=0
let fun=(todo)=>{
    c+=1
const firstdiv=document.createElement('div')
firstdiv.className="card"
firstdiv.style="margin:3px;"
firstdiv.id=`id-${c}`
const childdiv=document.createElement("div")
childdiv.className="card-body"
childdiv.textContent=todo
const content=document.createElement("p")
content.className="card-text"
let anchor=document.createElement("button")
anchor.classList.add("btn","btn-primary","delete")
anchor.id=`id-${c}`
anchor.textContent="DELETE"
anchor.style="float:right"
firstdiv.appendChild(childdiv)
childdiv.appendChild(anchor)
return firstdiv
}


// adding todo item
const parent=document.getElementById("addTODO")
let todo=document.getElementById("todo")
let submit=document.getElementById("button")
submit.addEventListener("click",(event)=>{
    let spans=document.getElementsByTagName("span")
    if(todo.value.trim()==0){
        spans[0].textContent="Please enter somthing"
        spans[0].style="color:red;";
    }else{
        parent.appendChild(fun(todo.value))
        todo.value=""

        spans[0].textContent=""
    }
})


// remove todo item

parent.addEventListener('click',(event)=>{
   if(event.target.classList[2]=="delete"){
       let del=document.querySelector("#"+event.target.id) 
       parent.removeChild(del)
   }
})


// search tood item

let search=document.getElementById("search")
search.addEventListener("keyup",(event)=>{
    let child=parent.children
    let arr =[].map.call(child,(i)=>{
        let x=i.textContent.toLowerCase()
        if(x.includes(search.value)){
            i.style="";
        }
        else{
            i.style="display:none"
        }
    })
})
