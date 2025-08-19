function greetingWithWeather(name, weather) {
    if (weather === "sunny"){
        return`Chào ${name}, hôm nay trời nắng!`
    }
    else if (weather === "rainy") {
        return`Chào ${name}, hôm nay trời mưa,hãy mang theo dù`
    }
    else {
        return`Chào ${name}, hôm nay thời tiết không xác định`
    }
}
console.log(greetingWithWeather("Nguyễn An", "sunny"))
console.log(greetingWithWeather("Lê Nam", "rainy"))
console.log(greetingWithWeather("Trần Tâm", "cloudy"))