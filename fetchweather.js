function buttonClicked() { 
    const city = document.getElementById("weather_input").value;

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=32804b24a847407391c53709241010&q=${city}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            const icon = data.current.condition.icon;
            const country = data.location.country;
            const region = data.location.region;
            const weatherDescription = data.current.condition.text;
            const localtime = data.location.localtime;
            const currenttemptcel = data.current.temp_c;  // Corrected here
            const currenttemptfar = data.current.temp_f;  // Corrected here
            const windmet = data.current.wind_mph;
            const windkilo = data.current.wind_kph;
            const humidity = data.current.humidity;
            const condition = data.forecast.forecastday[0].day.condition.text; // Access the day's condition text
            const rain = data.forecast.forecastday[0].day.daily_chance_of_rain; // Access chance of rain
            const snow = data.forecast.forecastday[0].day.daily_chance_of_snow; // Access chance of snow

            // Log the icon URL for debugging
            console.log("Icon URL:", icon);

            // Update the HTML elements with the fetched data
            document.getElementById("weatherIcon").src = `https:${icon}`;
            document.getElementById("demo0").textContent = `Country Name: ${country}`;
            document.getElementById("demo1").textContent = `Region: ${region}`;
            document.getElementById("demo2").textContent = `Weather: ${weatherDescription}`;
            document.getElementById("demo3").textContent = `Local Time: ${localtime}`;
            document.getElementById("demo4").textContent = `Current Temperature (Celsius): ${currenttemptcel}`;
            document.getElementById("demo5").textContent = `Current Temperature (Fahrenheit): ${currenttemptfar}`;
            document.getElementById("demo6").textContent = `Wind Speed (Miles per hour): ${windmet}`;
            document.getElementById("demo7").textContent = `Wind Speed (Kilometer per hour): ${windkilo}`;
            document.getElementById("demo8").textContent = `Humidity: ${humidity}%`;
            document.getElementById("demo9").textContent = `Today's Weather Condition: ${condition}`;
            document.getElementById("demo10").textContent = `Chances of Rain: ${rain}%`;
            document.getElementById("demo11").textContent = `Chances of Snow: ${snow}%`;
            

        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Failed to fetch weather data. Please check the city name and try again.");
        });
}
