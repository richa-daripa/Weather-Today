
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
    let data=await response.json();
        
    document.querySelector(".city").innerHTML=data.name;

    let st=data.weather[0].description;
    let desc=st.charAt(0).toUpperCase() + st.slice(1);
    document.querySelector(".description").innerHTML=`${desc} ${Math.round(data.main.temp_min)}° /${Math.round(data.main.temp_max)}°`;

    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

    let spd= data.wind.speed * (18/5);
    document.querySelector(".wind").innerHTML=Math.round(spd)+"km/h";

    document.querySelector(".pressure").innerHTML=data.main.pressure+"mbar";
    document.querySelector(".rf").innerHTML=Math.round(data.main.feels_like)+"°";
    document.querySelector(".visibility").innerHTML=data.visibility+"km";

    weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
  }
}

searchbtn.addEventListener("click", ()=>{     
  checkweather(searchbox.value);
});


