const inputCity = document.getElementById("city-input");
const submitBtn = document.getElementById("btn");
const resultdiv = document.getElementById("result-input")
const containerDiv = document.getElementsByClassName('container')
const API_KEY = '91bdc2f4087d6d58e9298e955a24c22f'

submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const city = inputCity.value
        const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        

        fetch(API_BASE_URL).then((res) =>
          res.json().then((data) => {
            console.log(data)

            // const pTag = document.createElement('p')
            resultdiv.textContent ='The Weather is ' + (data.weather[0].main) 
            const image = updateBackgroundImage((data.weather[0].main))
            // containerDiv[0].classList.replace('container', 'rainy-container')
            containerDiv[0].style.backgroundImage = `url(${image})`;


          })
        )
       
      })

function updateBackgroundImage(weatherCondition) {
    let imageUrl = 'bg2.jpg'; // Default image

    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            // containerDiv.style.imageUrl('../Weather_app/weather-img/clear.jpg')
            return imageUrl = '../Weather_app/weather-img/clear.jpg'; 
            break;
        case 'clouds':
            return imageUrl ='../Weather_app/weather-img/clouds.jpg' ; // Example cloudy weather background image
            break;
        case 'rain':
            imageUrl = '../Weather_app/weather-img/rainy.jpg'; // Example cloudy weather background image
            break;
        case 'drizzle':
            imageUrl = '../Weather_app/weather-img/drizzle_2.jpg'; // Example rainy weather background image
            break;
        case 'mist':
            imageUrl = '../Weather_app/weather-img/moody.jpg'; // Example rainy weather background image
            break;
        case 'sunny':
            imageUrl = '../Weather_app/weather-img/sunny.jpg'; // Example rainy weather background image
            break;
        case 'haze':
            imageUrl = '../Weather_app/weather-img/haze.jpg'; // Example rainy weather background image
            break;
        default:
            // containerDiv.classList.replace('container', 'rainy-container')
        
    }

    // document.body.style.backgroundImage = `url('${imageUrl}')`;
}