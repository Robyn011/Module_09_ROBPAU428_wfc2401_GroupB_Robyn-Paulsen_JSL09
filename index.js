/*fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

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
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `;
    })
    .catch(err => console.error(err));
// function getCurrentTime() {
//     const date = new Date()
//     document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
// }

// setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p>${data.main.temp}</p>
            `
        })
        .catch(err => console.error(err))
});
*/
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

// Function to update the current time every seconds
function getCurrentTime() {
    const date = new Date();
    // Display the current time in short time format
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"});
}

// Update the current time every seconds
setInterval(getCurrentTime, 1000);

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
