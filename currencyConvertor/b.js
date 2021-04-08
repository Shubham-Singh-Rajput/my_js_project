let currentCurrency=document.querySelector("#select-one")
let convertedCurrency=document.querySelector("#select-two")
document.addEventListener("DOMContentLoaded",async(e)=>{
    let data=await fetch("https://api.exchangerate-api.com/v4/latest/USD")
    let keys=Object.keys((await data.json()).rates)
    keys.map(i=>{
        let option=document.createElement("option")
        option.textContent=i
        option.value=i
        let newClone = option.cloneNode(true)
        convertedCurrency.appendChild(newClone)
        currentCurrency.appendChild(option)
    })
    
})
let last=document.getElementById("last")

let  insertedValue=document.querySelector("#second")
let div=document.createElement("div")
document.querySelector("#btn").addEventListener("click",async(e)=>{
    e.preventDefault()
    last.textContent="The amount converted is :            "
    let option=document.querySelectorAll("select")    
    if(insertedValue.value=="" || option[0].value=="undefined" || option[1].value=="undefine"){
        div.innerText="please fill the correct detail"
        div.style.color="red"
        div.className="m-3"
        div.id="span"
        document.body.appendChild(div)
    }
    else{
        if(document.querySelector("#span")!=null){
        document.querySelector("#span").remove()
        }
        let data=await fetch(`https://api.exchangerate-api.com/v4/latest/${currentCurrency.value}`)
        let keys=(await data.json()).rates
        let ans=(keys[currentCurrency.value]*insertedValue.value)*keys[convertedCurrency.value]
        ans=ans.toFixed(2)
        last.textContent=`The amount converted is :            ${ans}`
        
    }
})