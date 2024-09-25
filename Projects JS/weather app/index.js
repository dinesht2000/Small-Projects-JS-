const apikey = "";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var city = document.querySelector(".city");
var temp=document.querySelector(".temp");
var humid=document.querySelector(".humidity");
var wind=document.querySelector(".wind");

const search=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weather=document.querySelector(".weather_icon")


async function checkWeather(cityname) {
  const response = await fetch(apiurl + cityname +`&appid=${apikey}`);
  if(response.status==404){
    document.querySelector(".error").style.display="block";
  }
  else{
    document.querySelector(".error").style.display="none";

  }
  var data = await response.json();
  console.log(data);
  city.innerHTML=data.name;
  console.log(data.name);
  temp.innerHTML=Math.round(data.main.temp)+"°c ";
  humid.innerHTML=data.main.humidity+"%";
  wind.innerHTML=data.wind.speed+" km/h";

  if(data.weather[0].main=="Clouds"){
    weather.src="images/clouds.png";
  }
  else if(data.weather[0].main=="Clear"){
    weather.src="images/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weather.src="images/rain.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    weather.src="images/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    weather.src="images/mist.png";
  }
  else if(data.weather[0].main=="Snow"){
    weather.src="images/snow.png";
  }
  else if(data.weather[0].main=="Rain"){
    weather.src="images/rain.png";
  }




}
searchbtn.addEventListener("click",()=>{
    checkWeather(search.value);
})


