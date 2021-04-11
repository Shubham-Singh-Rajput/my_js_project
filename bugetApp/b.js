let totalAmount=document.getElementById("totalAmount")
let submitTotalAmount=document.getElementById("submitamount")
let WritetotalAmount=document.getElementById("WritingBuget")
let totalAmountOfProduct=document.getElementById("TotalAmoutntPaid")
let savingAmount=document.getElementById("SavingBuget")
let singleProductName=document.getElementById("ExpencesName")
let singleProductAmount=document.getElementById("Expenceamount")
let submitSingleProduct=document.getElementById("submitexpences")
let addingInDiv=document.getElementById("addind")



let allProductPrices={}
let ids=0;

let newTotalAmount
let newSingleProductName
let newSingleProductAmount


function WritetotalAmountFunction(){
    WritetotalAmount.textContent=newTotalAmount
}

function modificationAllExpenditure(){
    let sum=0
    for (const key in allProductPrices) {
        sum+=allProductPrices[key]
    }
    totalAmountOfProduct.textContent=sum
}

function modificationSavingBuget(){
    let sum=0
    for (const key in allProductPrices) {
        sum+=allProductPrices[key]
    }
    sum=newTotalAmount-sum
    if(sum<0){
        savingAmount.textContent=`${sum} going out of Buget`
    }
    else{
        savingAmount.textContent=sum
    }
}




function newDiv(name,price){
    ids+=1
    name=name.trim()
    if(name in allProductPrices){
        allProductPrices[name]+=Number(price)
    }else{
        allProductPrices[name]=Number(price)
    }
let row=document.createElement("div")
row.classList.add("row","m-2")
row.id=`id-${ids}`
let ProductNameColumb=document.createElement("div")
ProductNameColumb.textContent=name
ProductNameColumb.classList.add("col")
let ProductPriceColumb=document.createElement("div")
ProductPriceColumb.classList.add("col")
ProductPriceColumb.textContent=price
let ankor=document.createElement("a")
ankor.textContent="Delete"
ankor.classList.add("btn", "btn-primary")
console.log(ankor)
row.appendChild(ProductNameColumb)
row.appendChild(ProductPriceColumb)
row.appendChild(ankor)
return row
}



function updatingPrices(name,price){
    let newGrowAmount=allProductPrices[name]-Number(price);
    allProductPrices[name]=newGrowAmount
    console.log(newGrowAmount)
    if(allProductPrices[name]==0){
        delete allProductPrices[name]
    }
    modificationAllExpenditure()
    modificationSavingBuget()
    
}




function applyingDelete(){
    document.body.addEventListener("click",(e)=>{
        if(e.target.classList[0]=="btn" && e.target.textContent=="Delete"){
            
            let parent =(e.target.parentElement)
            let id=(parent.getAttribute("id"))
            let element=document.getElementById(id)
            let ProductName=element.children[0].textContent
            let ProductPrice=element.children[1].textContent
            e.target.parentElement.remove()
            updatingPrices(ProductName,ProductPrice)

        }
    })
}





submitTotalAmount.addEventListener("click",(e)=>{
    e.preventDefault()
    if(totalAmount.value!="" && totalAmount.value>0){
        newTotalAmount=totalAmount.value
        e.stopPropagation()
        WritetotalAmountFunction()
        modificationSavingBuget()

    }
    else{
        totalAmount.placeholder="Please provide an amount"
    }
})





submitSingleProduct.addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(newTotalAmount>0){
    if(singleProductName.value!="" && newTotalAmount!=""){
        newSingleProductName=singleProductName.value
    }
    else{
        singleProductName.placeholder="Please Enter The Name"
    }
    if(singleProductAmount.value!=""&& singleProductName.value!="" && newTotalAmount!="" ){
        newSingleProductAmount=singleProductAmount.value
        addingInDiv.appendChild(newDiv(newSingleProductName,newSingleProductAmount))
        singleProductAmount.value=""
        singleProductName.value=""
        // console.log(allProductPrices)
        modificationAllExpenditure()
        modificationSavingBuget()
    }
    else{
        singleProductAmount.placeholder="Please provide the amount"
    }
}else{
    totalAmount.placeholder="Please provide an amount"
}
})



applyingDelete();



document.getElementById("reset").addEventListener("click",()=>{
    location.reload("./a.html")
})