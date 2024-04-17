
// Fetch a random nature photo from the Unsplash API and update the background image and author
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        // Set the background image to the retrieved photo
        document.body.style.backgroundImage = `url(${data.urls.regular})`;
        // Display the author's name
		document.getElementById("author").textContent = `By: ${data.user.name}`;
    })
    .catch(err => {
        // Use a default background image/author in case of error
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
		document.getElementById("author").textContent = `By: Dodi Achmad`;
    });

/*

Fetching a Random Nature Photo from Unsplash API section:

The code makes a GET request to the Unsplash API endpoint (https://apis.scrimba.com/unsplash/photos/random) to fetch a random nature photo.
It specifies query parameters like orientation=landscape and query=nature to ensure the photo is landscape-oriented and related to nature.
If the request is successful (res.ok), it parses the response as JSON and updates the background image of the webpage's body with the 
retrieved photo (document.body.style.backgroundImage) and displays the author's name (document.getElementById("author").textContent).
If there's an error, it catches it and sets a default background image and author.

*/

// Fetch data about Dogecoin from the CoinGecko API and update the crypto section
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong");
        }
        return res.json();
    })
    .then(data => {
        // Update the top section with the coin's image and name
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
        // Update the crypto section with price, high, and low data
        document.getElementById("crypto").innerHTML += `
        <p>\u{1F3AF}: $${data.market_data.current_price.usd}</p>
        <p>\u{1F446}: $${data.market_data.high_24h.usd}</p>
        <p>\u{1F447}: $${data.market_data.low_24h.usd}</p>
    `;
    
    })
    .catch(err => console.error(err));

/*

Fetching Data about Dogecoin from CoinGecko API section:

This section fetches data about Dogecoin from the CoinGecko API endpoint (https://api.coingecko.com/api/v3/coins/dogecoin).
It checks if the response is okay, and if so, it updates the webpage with the coin's image and name in the top section 
(document.getElementById("crypto-top").innerHTML) and with price, high, and low data in the crypto section (document.getElementById("crypto").innerHTML).
If there's an error, it catches it and logs it to the console.

*/

// Function to update the current time every seconds
function getCurrentTime() {
    const date = new Date();
    // Display the current time in short time format
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"});
}

// Update the current time every seconds
setInterval(getCurrentTime, 1000);

/*

Updating Current Time:

There's a function defined named getCurrentTime() which retrieves the current time and 
updates the webpage element with id "time" every second (setInterval(getCurrentTime, 1000)).

*/


// Fetch weather data based on user's geolocation and update the weather section
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available");
            }
            return res.json();
        })
        .then(data => {
            // Construct the icon URL and update weather section with temperature and city name
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} /> 
                <p class="weather-temp">${Math.round(data.main.temp)}&deg;C</p>
                <p class="weather-city">${data.name}</p>
            `;
            console.log(data); // Log weather data to console
        })
        .catch(err => {
            // Update weather section with error message
            document.getElementById("weather").innerHTML = `<p>Error: ${err.message}</p>`;
            console.error(err);
        });
});

/*

Fetching Weather Data Based on User's Geolocation section:

It utilizes the navigator.geolocation.getCurrentPosition function to get the user's current position.
Then, it fetches weather data from the OpenWeatherMap API based on the user's latitude and longitude.
If the request is successful, it constructs the weather icon URL, updates the weather section with temperature and city name, 
and logs the weather data to the console.
If there's an error, it updates the weather section with an error message.

*/
