function fetchWeather(){
    var city = document.getElementById('city_name').value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=625dff8a4f6867ed4209168560564a28&units=metric')
    .then(response=>response.json())
    .then(data=>{
        document.getElementById('temp').value =   data.main.temp
    document.getElementById('min_temp').value = data.main.temp_min
    document.getElementById('max_temp').value = data.main.temp_max
        console.log(data)
    
    })
}