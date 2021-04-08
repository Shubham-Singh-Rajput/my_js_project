
$(document).ready(async(e)=>{
    let data= await (await fetch("https://api.covid19api.com/summary")).json()
    $("#btn").click((e)=>{
        $('.one').html("")
        $('.two').html("")
        let inputs=$("#countary").val()
        if(inputs.length>0){
        let country=data.Countries.filter(i=>{
            return i.Country.toLowerCase()==inputs.trim().toLowerCase()
         })
         $(".two").append(`<div class="card " style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">${country[0].Country}</h5>
           <p class="card-text">TotalConfirmed :-> ${country[0].TotalConfirmed}</p>
           <p class="card-text">TotalDeaths :-> ${country[0].TotalDeaths}</p>
           <p class="card-text">TotalRecovered :-> ${country[0].TotalRecovered}</p>
           <p class="card-text">NewRecovered :-> ${country[0].NewRecovered}</p>
           <p class="card-text">NewConfirmed :-> ${country[0].NewConfirmed}</p>
           <p class="card-text">Last Updated :-> ${new Date(country[0].Date).toString()}</p>
         </div>
       </div>`)
       $("#countary").val("")
        }
    })
    $("#allCountry").click((e)=>{
        $('.two').html("")
        $('.one').html("")
        $("#countary").val("")
        data.Countries.map(i=>{
            $(".one").append(`<div class="card m-2 " style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${i.Country}</h5>
              <p class="card-text">TotalConfirmed :-> ${i.TotalConfirmed}</p>
              <p class="card-text">TotalDeaths :-> ${i.TotalDeaths}</p>
              <p class="card-text">TotalRecovered :-> ${i.TotalRecovered}</p>
              <p class="card-text">NewRecovered :-> ${i.NewRecovered}</p>
              <p class="card-text">NewConfirmed :-> ${i.NewConfirmed}</p>
              <p class="card-text">Last Updated :-> ${new Date(i.Date).toString()}</p>
            </div>
          </div>`)
         })
    })

})
