import React ,{useState} from "react";

import "./WeatherApp.css";



import search_icon from "../assests/search.jpg";
import snow_icon from "../assests/snow.jpeg";
import wind_icon from "../assests/wind.png";
import rain_icon from "../assests/rain.jpeg";
import humidity_icon from "../assests/Humidity.png";
import drizzle_icon from "../assests/drizzle.jpeg";
import cloud_icon from "../assests/cloud.png";
import clear_icon from "../assests/clear.png";


const  WeatherApp = ()=> {

    
    const [wicon,setWicon] = useState(cloud_icon);
    

    const search = async()=>{
        const element = document.getElementsByClassName("cityInput")[0].value;
        if(element===""){
            return 0;
        }
        
        const API_KEY = "504985c5bbf69dba2284ebc2b32ac4c6";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=metric&appid=${API_KEY}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);


        const humidity = document.getElementsByClassName("humidity-percent")[0];
        const wind = document.getElementsByClassName("wind-rate")[0];
        const temp = document.getElementsByClassName("weather-temp")[0];
        const location = document.getElementsByClassName("weather-location")[0];
        const description = document.getElementsByClassName("description")[0];


        humidity.innerHTML = data.main.humidity+" %";
        wind.innerHTML = data.wind.speed+" km/h";
        temp.innerHTML = Math.floor(data.main.temp)+"°C";
        location.innerHTML = data.name;
        description.innerHTML = data.weather.description;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){

            setWicon(rain_icon);
        }
        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else {
            setWicon(clear_icon);
        }
        
    }
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon" onClick={()=>{search()}}>

                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src = {wicon} className="setWicon" alt = ""/>
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>

                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
                <div>
                    <p className="description text">Weather: Happy Weather !!</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp
