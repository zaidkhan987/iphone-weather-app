const btn = document.querySelector('.inputArea button')
const input = document.querySelector('input')
const background = document.querySelector(".container")


const getData = async () => {    

    let currenrURL = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=34cb9fc637da145d41fb9fb2e2716bcf&units=metric`)

    let curRes = await currenrURL
    let curResJson = await curRes.json() 
    // console.log(curResJson);
    
    document.querySelector('.currentCity').innerHTML = curResJson.name
    document.querySelector('#curTemp').innerHTML = Math.round(curResJson.main.temp)
    document.querySelector('.currentcondition').innerHTML = curResJson.weather[0].description
    
    if (curResJson.weather[0].description === "clear sky"){

        //background change
        background.style.backgroundImage = "url(./Background/clear.gif)"

        //Time Icon Change
        document.querySelector('.cloudIconNow').innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
        document.querySelector('.cloudIcon3').innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
        document.querySelector('.cloudIcon6').innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
        document.querySelector('.cloudIcon9').innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
        document.querySelector('.cloudIcon12').innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'

        //Days Pic Change
        document.getElementById("todayimg").src = "./Images/clear.png"
        document.getElementById("tomorrowimg").src = "./Images/clear.png"
        document.getElementById("2daysimg").src = "./Images/clear.png"
        document.getElementById("3daysimg").src = "./Images/clear.png"
        document.getElementById("4daysimg").src = "./Images/clear.png"
        document.getElementById("5daysimg").src = "./Images/clear.png"

    


    }
    if (curResJson.weather[0].description === "smoke"){

        //background chang
        background.style.backgroundImage = "url(./Background/smoke.gif)"

        //Time Icon Change
        document.querySelector('.cloudIconNow').innerHTML = '<i class="fa-solid fa-cloud"></i>'
        document.querySelector('.cloudIcon3').innerHTML = '<i class="fa-solid fa-cloud"></i>'
        document.querySelector('.cloudIcon6').innerHTML = '<i class="fa-solid fa-cloud"></i>'
        document.querySelector('.cloudIcon9').innerHTML = '<i class="fa-solid fa-cloud"></i>'
        document.querySelector('.cloudIcon12').innerHTML = '<i class="fa-solid fa-cloud"></i>'

          //Days Pic Change
          document.getElementById("todayimg").src = "./Images/clouds.png"
          document.getElementById("tomorrowimg").src = "./Images/clouds.png"
          document.getElementById("2daysimg").src = "./Images/clouds.png"
          document.getElementById("3daysimg").src = "./Images/clouds.png"
          document.getElementById("4daysimg").src = "./Images/clouds.png"
          document.getElementById("5daysimg").src = "./Images/clouds.png"
     
    }
        
    if (curResJson.weather[0].description === "very heavy rain"){
        console.log(curResJson.weather[0].description);
        


        //background chang
        background.style.backgroundImage = "url(./Background/rain.gif)"
        
        
        //Time Icon Change
        document.querySelector('.cloudIconNow').innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'
        document.querySelector('.cloudIcon3').innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'
        document.querySelector('.cloudIcon6').innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'
        document.querySelector('.cloudIcon9').innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'
        document.querySelector('.cloudIcon12').innerHTML = '<i class="fa-solid fa-cloud-rain"></i>'

          //Days Pic Change
          document.getElementById("todayimg").src = "./Images/rain.png"
          document.getElementById("tomorrowimg").src = "./Images/rain.png"
          document.getElementById("2daysimg").src = "./Images/rain.png"
          document.getElementById("3daysimg").src = "./Images/rain.png"
          document.getElementById("4daysimg").src = "./Images/rain.png"
          document.getElementById("5daysimg").src = "./Images/rain.png"
    }
    if (curResJson.weather[0].description === "overcast clouds"){

        //background chang
        background.style.backgroundImage = "url(./Background/broken.gif)"


        //Time Icon Change
        document.querySelector('.cloudIconNow').innerHTML = '<i class="fa-brands fa-soundcloud"></i>'
        document.querySelector('.cloudIcon3').innerHTML = '<i class="fa-brands fa-soundcloud"></i>'
        document.querySelector('.cloudIcon6').innerHTML = '<i class="fa-brands fa-soundcloud"></i>'
        document.querySelector('.cloudIcon9').innerHTML = '<i class="fa-brands fa-soundcloud"></i>'
        document.querySelector('.cloudIcon12').innerHTML = '<i class="fa-brands fa-soundcloud"></i>'

        //Days Pic Change
        document.getElementById("todayimg").src = "./Images/mist.png"
        document.getElementById("tomorrowimg").src = "./Images/mist.png"
        document.getElementById("2daysimg").src = "./Images/mist.png"
        document.getElementById("3daysimg").src = "./Images/mist.png"
        document.getElementById("4daysimg").src = "./Images/mist.png"
        document.getElementById("5daysimg").src = "./Images/mist.png"

    }
    
    // else if (curResJson.weather[0].description === "clear sky"){
    //     background.style.backgroundImage = "url(./Background/clear\ sky.gif)"
    // }



    
    //  Time Section

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=34cb9fc637da145d41fb9fb2e2716bcf&units=metric`


    let response = await fetch(url);
    let jsonResponse = await response.json()
    console.log(jsonResponse.list);

    document.querySelector('#curTempNow').innerHTML = Math.round(curResJson.main.temp)
    document.getElementById('3Hours').innerHTML = jsonResponse.list[2].dt_txt.slice(11,16)
    document.getElementById('3HoursTemp').innerHTML = Math.round(jsonResponse.list[2].main.temp)
    
    document.getElementById('6Hours').innerHTML = jsonResponse.list[3].dt_txt.slice(11,16)
    document.getElementById('6HoursTemp').innerHTML = Math.round(jsonResponse.list[3].main.temp)

    document.getElementById('9Hours').innerHTML = jsonResponse.list[4].dt_txt.slice(11,16)
    document.getElementById('9HoursTemp').innerHTML = Math.round(jsonResponse.list[4].main.temp)

    document.getElementById('12Hours').innerHTML = jsonResponse.list[5].dt_txt.slice(11,16)
    document.getElementById('12HoursTemp').innerHTML = Math.round(jsonResponse.list[5].main.temp)



    // Days Section

    document.querySelector("#todaymin").innerHTML = Math.round(jsonResponse.list[0].main.temp_min)
    document.querySelector("#todaymax").innerHTML = Math.round(jsonResponse.list[7].main.temp_max)

    document.querySelector("#tomorrowmin").innerHTML = Math.round(jsonResponse.list[8].main.temp_min)
    document.querySelector("#tomorrowmax").innerHTML = Math.round(jsonResponse.list[15].main.temp_max)

    document.getElementById("2daysmin").innerHTML = Math.round(jsonResponse.list[16].main.temp_min)
    document.getElementById("2daysmax").innerHTML = Math.round(jsonResponse.list[23].main.temp_max)

    document.getElementById("3daysmin").innerHTML = Math.round(jsonResponse.list[24].main.temp_min)
    document.getElementById("3daysmax").innerHTML = Math.round(jsonResponse.list[31].main.temp_max)

    document.getElementById("4daysmin").innerHTML = Math.round(jsonResponse.list[32].main.temp_min)
    document.getElementById("4daysmax").innerHTML = Math.round(jsonResponse.list[39].main.temp_max)

    document.getElementById("5daysmin").innerHTML = Math.round(jsonResponse.list[39].main.temp_min)
    document.getElementById("5daysmax").innerHTML = Math.round(jsonResponse.list[39].main.temp_max)

}

btn.addEventListener('click', getData)


