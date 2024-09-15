// NEVER EVER SHARE API-KEY IN JS FILE
// de9ab8ef7790d7efec7851132bec3890
const errorMessage = document.getElementById('error-message');
const getWeatherUpdate = async cityName => {
    const apiKey = 'de9ab8ef7790d7efec7851132bec3890';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.log('res is not okay(from res)');
            errorMessage.style.display = 'block';
        } else {
            const data = await res.json();
            displayWeatherUpdate(data);
        }
    } catch (error) {
        console.log(error, 'from catch');
        errorMessage.style.display = 'block';
    } finally { 
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }

    
}
const cityName = document.getElementById('city-name');
const tempInC = document.getElementById('temperature');
const weatherCondition = document.getElementById('weather-condition');
const displayWeatherUpdate = data => {
    console.log(data);
    console.log(data.weather[0].main);
    console.log(data.main.temp);
    cityName.innerText = data.name;
    tempInC.innerText = data.main.temp;
    weatherCondition.innerText = data.weather[0].main;
}
const searchField = document.getElementById('city-input');
const searchButton = document.getElementById('button-addon2');
searchButton.addEventListener('click', function(){
    const cityName = searchField.value;
    getWeatherUpdate(cityName);
})
getWeatherUpdate('dhaka')