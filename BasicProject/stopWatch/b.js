let d=document.getElementById("watch")
let data=""
let x;
let checker=0
let hour=0;
let minute=0
let second=0

let check=document.getElementById("check")
check.addEventListener("click",(e)=>{
    if(e.target.textContent=="stop" && checker==1){
        clearInterval(x)
        checker=0
    }
    if(e.target.textContent=="start" && checker==0){
        x= setInterval(()=>{
            second+=1
            if(second>60){
                second=0
                minute+=1
                if(minute> 60){
                    minute=0
                    hour+=1
                }
            }
            d.textContent=`${hour}:${minute}:${second}`
        },1000)

        checker=1
    }
})
