let password=document.getElementById("password")
let see_pass=document.getElementById("togglePassword")
let c=1;
see_pass.style="margin-left: -30px;cursor: pointer;"
see_pass.addEventListener("click",(e)=>{
    if(c==1){
        password.setAttribute("type","text")
        c=0
        see_pass.classList.add('fa-eye-slash')

        
    }
    else{
        password.setAttribute("type","password")
        c=1
        see_pass.classList.remove('fa-eye-slash')
    }
})