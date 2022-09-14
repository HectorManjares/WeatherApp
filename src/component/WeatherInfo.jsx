import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import video1 from "../assets/Video/Despejado.mp4"
import video2 from "../assets/Video/Lluvioso.mp4"
import video3 from "../assets/Video/Neblina.mp4"
import video4 from "../assets/Video/Nevando.mp4"
import video5 from "../assets/Video/Nublado.mp4"
import video6 from "../assets/Video/Tormenta.mp4"
import Time from './Time';


const WeatherInfo = () => {

    const [weatherUser, setWeatherUser] = useState({})
    const [theCentigrades, setTheCentigrades] = useState(true)
    const [country, setCountry] = useState({})

    const backChange = () => {
        if (weatherUser.weather?.[0].id >= 200 && weatherUser.weather?.[0].id <= 232) {
            return video6
        } else if (weatherUser.weather?.[0].id >= 300 && weatherUser.weather?.[0].id <= 321) {
            return video2
        } else if (weatherUser.weather?.[0].id >= 500 && weatherUser.weather?.[0].id <= 532) {
            return video2
        } else if (weatherUser.weather?.[0].id >= 600 && weatherUser.weather?.[0].id <= 622) {
            return video4
        } else if (weatherUser.weather?.[0].id >= 700 && weatherUser.weather?.[0].id <= 781) {
            return video3
        } else if (weatherUser.weather?.[0].id >= 800 && weatherUser.weather?.[0].id <= 802) {
            return video1
        } else if (weatherUser.weather?.[0].id >= 803 && weatherUser.weather?.[0].id <= 804) {
            return video5
        }
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);

        function success(pos) {
            const crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=5c0619fbd62af49afa58d49f64c9658a`)
                .then(res => { setWeatherUser(res.data); console.log(res.data) })
        }

    }, [])

    useEffect(() => {
        if (weatherUser.sys) {
            axios.get(`https://restcountries.com/v2/alpha/${weatherUser.sys?.country}`)
                .then(res => { setCountry(res.data); console.log(res.data) })
        }
    }, [weatherUser])

    const unixTime = (weatherUser.sys?.sunrise);
    const d = new Date(unixTime * 1000);
    const date = d.getHours() + ":" + d.getMinutes();

    const unixTime2 = (weatherUser.sys?.sunset);
    const d2 = new Date(unixTime2 * 1000);
    const date2 = (d2.getHours() > 12 ? d2.getHours() - 12 : d2.getHours());


    const Tempt = (weatherUser.main?.temp)
    const TempF = ((Tempt - 273.15) * 9 / 5 + 32)
    const TempC = ((TempF - 32) * 5 / 9)
    const Temp2 = (weatherUser.main?.temp_max)
    const TempMax = (Temp2 - 273.15)
    const Temp3 = (weatherUser.main?.temp_min)
    const TempMin = (Temp3 - 273.15)


    return (
        <div className='Weather' >
            <div className='Weather-vid'>
                <ReactPlayer
                    url={backChange()}
                    playing
                    muted
                    loop
                    width={"100%"}
                    height={"100vh"}
                />
            </div>
            <div className='Weather-cont'>
                <div className='InfoIntro'>
                    <p className='Country'>You are in {country.nativeName} <i class="fa-solid fa-earth-africa"></i></p>
                    <p className='City'>in this city, {weatherUser.name} <i class="fa-solid fa-mountain-city"></i></p>
                    <button onClick={() => setTheCentigrades(!theCentigrades)} className='tempBtn'>
                        <p className='Temperature'>{theCentigrades ? Math.trunc(TempF) : Math.trunc(TempC)}
                            {theCentigrades ? '°F' : '°C'}</p></button>
                    <div className='Info-Weather'>
                        <img src={`http://openweathermap.org/img/wn/${ weatherUser.weather?.[0].icon}@2x.png`} className='icon' alt="" />
                    </div>
                    <div className='infoApi'>

                        <p className='TpMax'>Temperatura Max: {Math.trunc(TempMax)}°C <i class="fa-solid fa-temperature-arrow-up"></i></p>
                        <p className='TpMin'>Temperatura Min: {Math.trunc(TempMin)}°C <i class="fa-solid fa-temperature-arrow-down"></i></p>
                        <p className='Humidity'>Humidity: {weatherUser.main?.humidity}% <i class="fa-solid fa-droplet"></i></p>
                        <p className='Pressure'>Ambient Pressure: {weatherUser.main?.pressure} hPa <i class="fa-solid fa-compass"></i></p>
                        <p className='WindDir'>Wind Speed: {weatherUser.wind?.speed}metre/sec <i class="fa-solid fa-wind"></i></p>
                        <p className='Wind'>Wind Direction: {weatherUser.wind?.deg}° <i class="fa-solid fa-flag-checkered"></i></p>
                        <p className='Sunrise'>Sunrice: {date} AM <i class="fa-regular fa-sun"></i></p>
                        <p className='Sunset'>Sunset: {date2 + ':' + d2.getMinutes()} PM <i class="fa-solid fa-moon"></i></p>

                    </div>
                </div>
                <div className='TempBtn'>
                    <Time />
                </div>

            </div>
        </div>
    );
};

export default WeatherInfo;