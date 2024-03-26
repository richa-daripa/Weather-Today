
const apiKey="641bd95f8fef31e207ac457bac5d8a14";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){ 
    const response=await fetch(apiUrl+ city+`&appid=${apiKey}`);
                                                                
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();//response.json() is a method of the Response object that allows a JSON object to be extracted from the response. 
        //The method returns a promise ie. await
    
        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="images/snow.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Haze"){
            weatherIcon.src="images/haze.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}


searchbtn.addEventListener("click", ()=>{     
    checkweather(searchbox.value);
});

