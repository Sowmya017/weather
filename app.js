const apikey="8abeee95b05e5e6edc522c8a082cdaec";
const base_url =`https://api.openweathermap.org/data/2.5/weather?units=metric`;
const search_box=document.querySelector(".search input");
const search_btn=document.querySelector(".search i");
const weatherIcon=document.querySelector(".whether_icon")
async function checkWeather(city){
    const response = await fetch(`${base_url}&q=${encodeURIComponent(city)}&appid=${apikey}`);
    const data = await response.json();
    
    console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

const weatherMain = data.weather[0].main;
        if (weatherMain === "Clear") {
            weatherIcon.src = "icons/clear_img.png";
        } else if (weatherMain === "Clouds") {
            weatherIcon.src = "icons/cloudy_img.png";
        } else if (weatherMain === "Rain") {
            weatherIcon.src = "icons/rain_img.png";
        } else if (weatherMain === "Drizzle") {
            weatherIcon.src = "icons/showerRain_img.png";
        } else if (weatherMain === "Mist") {
            weatherIcon.src = "icons/mist_img.png";
        } else if (weatherMain === "Snow") {
            weatherIcon.src = "icons/snow_img.png";
        } else if (weatherMain === "Windy") {
            weatherIcon.src = "icons/scatteredClouds_img.png";
        } else {
            weatherIcon.src = "icons/whether_img.png"; // Default icon
        }


}
    
search_btn.addEventListener("click",()=>{
    checkWeather(search_box.value);
});

search_box.addEventListener("keypress",(evt) =>{
if(evt.key === "Enter"){
    evt.preventDefault();
    checkWeather(search_box.value);
}
});



