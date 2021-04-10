// data of first Part
let Total_Quections=document.getElementById("Total-Quections")
let level=document.getElementById("level")
let first_part=document.getElementById("first-part")

let second=document.getElementById("second")
let third=document.getElementById("third")
second.classList.add("hide")
third.classList.add("hide")


// second part  data
let question_No=document.getElementById("question-no")
let question_Detail=document.getElementById("question-detail")
let options=document.getElementById("options")



// second part buttons
let previous=document.getElementById("previous")
let next=document.getElementById("next")
let submit =document.getElementById("submit")

let answerObject={}
// Submit Test 




// third part
totalNoQuection=document.getElementById("totalNOQuestion")
let attemptedQuestion=document.getElementById("attemptedQuestion")
let TotalMark=document.getElementById("TotalMark")


let totalNOQuestion2=document.getElementById("totalNOQuestion2")
let WrongQuestion=document.getElementById("attemptedQuestion2")
let rightQuestion=document.getElementById("rightQuestion")

// exit
let exit=document.getElementById("Exit")


let totalCorrect=0
let Submit_Test=(quizArray)=>{
    for(let i=0;i<quizArray.length;i++){
        
        if(answerObject[i]==quizArray[i].correct_answer){
            totalCorrect+=1
        }
    }
    second.classList.add("hide")
    third.classList.remove("hide")
    third.classList.add("someClass")
    totalNoQuection.textContent=`Total Number Of Question : ${quizArray.length}`
    attemptedQuestion.textContent=`Attempted Question : ${(Object.keys(answerObject)).length}`
    TotalMark.textContent=`Total Mark : ${totalCorrect} Out of ${quizArray.length}`
    totalNOQuestion2.textContent=`Total Number Of Non-Attempted Question : ${quizArray.length-(Object.keys(answerObject)).length}`
    WrongQuestion.textContent=`Total Number Of Wrong Question ${(Object.keys(answerObject)).length-totalCorrect}`
    rightQuestion.textContent=`Total Number Of Right Question : ${totalCorrect} `
    exit.addEventListener("click",(e)=>{
        location.reload("./a.html")
    })
}





let SubmitAndCheckAnswer=(quizArray)=>{
    let submit=document.getElementById("submit")
let answer=document.querySelectorAll('input[name="radio"]');
let d=0
Array.from(answer).map(i=>{
    if(i.checked==true){
        d=1
        answerObject[indexOfCurrentQuesion]=i.value
    }
})
if(d==0){
    window.alert("please Choose any One Option Or Click On Pass to Pass Question  Or If you Done Than Submit The test")

}
else{
    if(indexOfCurrentQuesion<quizArray.length-1){
        c=0
        indexOfCurrentQuesion+=1
        submit.classList.remove("hide")
        inside(quizArray) 
        
    }else{
        c=0
       submit.classList.add("hide")
        
    }
}

}




let option_Radio=(value)=>{
   
    options.textContent=""
    options.innerHTML=""
    for(let i=0;i<value.length;i++){
        
        options.innerHTML+=`<input type="radio" class="btn-check " name="radio" id="${value[i]}" value="${value[i]}" >
        <label class="btn btn-outline-success radio" for="${value[i]}">${value[i]}</label>`
    }

}



let indexOfCurrentQuesion=0
let indexOfQuesionSolve=indexOfCurrentQuesion

let FirstTime=false

let submissionAnswer=0
let QuizPart=(quizArray)=>{
    document.addEventListener("click",async(e)=>{
        let c=1
        
        if(e.target.id=="previous"){
            c=0
            let submit=document.getElementById("submit")
            submit.classList.remove("hide")
            indexOfCurrentQuesion-=1
            inside(quizArray) 
        }
        else if(e.target.id=="next"){
            c=0
            indexOfCurrentQuesion+=1
            inside(quizArray)
        }
        else if(e.target.id=="submit" && c==1){
            SubmitAndCheckAnswer(quizArray)
        }
        else if(e.target.id=="submit-test"){
            Submit_Test(quizArray)
        }
    })
    if(FirstTime==false){
        FirstTime=true
        inside(quizArray)
    }
}



let inside=(quizArray)=>{
    if(indexOfCurrentQuesion==0){
        previous.classList.add("hide")
    }
    else{
        previous.classList.remove("hide")
    }
    if(indexOfCurrentQuesion>=quizArray.length-1){
        next.classList.add("hide")
    }
    else{
        next.classList.remove("hide")
    }
    
    question_No.textContent=`Question ${indexOfCurrentQuesion+1}`
    question_Detail.innerHTML=`${quizArray[indexOfCurrentQuesion].question}`
    let arrayOfOptions=[...quizArray[indexOfCurrentQuesion].incorrect_answers]
    arrayOfOptions.splice(Math.floor(Math.random()*4),0,quizArray[indexOfCurrentQuesion].correct_answer)
    option_Radio(arrayOfOptions)
}



let start_the_quiz=document.getElementById("Start-the-quiz").addEventListener("click",async(e)=>{
 
    if(Total_Quections.value=="" || Total_Quections.value<=0 ){
        Total_Quections.placeholder="Enter the valid data"
        Total_Quections.style="border-color:red"
    }
    else{
        let start_the_quiz=document.getElementById("Start-the-quiz")
        start_the_quiz.innerHTML=`<div class="spinner-border" role="status"></div><div>Loading</div>`
        start_the_quiz.classList.remove("btn-primary","btn")
        Total_Quections.style=""
        Total_Quections.placeholder=""
        let data=await fetch(`https://opentdb.com/api.php?amount=${Total_Quections.value}&difficulty=${level.value}&type=multiple`)
        let quizData=await data.json()
        let quizArray=quizData.results
       
        start_the_quiz.innerHTML=`Start Quiz`
        start_the_quiz.classList.add("btn-primary","btn")
        second.classList.remove("hide")
        first_part.classList.add("hide")
        QuizPart(quizArray)

    }
})

