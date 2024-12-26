let keyy = "05aef76b4355cdab242f0489ab39d93f";
let url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=egypt";

async function gett() {
  const response = await fetch(url + "&appid=" + keyy);
  const data = await response.json();
  console.log(data);

  // identify the data
  document.getElementById("locName").innerText = data.name;
  document.getElementById("temp").innerText = data.main.temp + "°C";
  document.getElementById("weather").innerText = data.weather[0].main;
  document.getElementById("minTemp").innerText = data.main.temp_min + "°C";
  document.getElementById("maxTemp").innerText = data.main.temp_max + "°C";
  document.getElementById("pressure").innerHTML = data.main.pressure + " hPa";
  document.getElementById("humidity").innerText = data.main.humidity + "%";
  document.getElementById("wind").innerText = data.wind.speed + " m/s";


  // change bg depend on weather
  switch (data.weather[0].main) {
    case "Clear":
      document.body.style.backgroundImage = "url('./imgs/clear.jpg')";
      break;
    case "Clouds":
      document.body.style.backgroundImage = "url('./imgs/cloud.jpg')";
      break;
    case "Rain":
    case "Drizzle":
    case "Mist":
      document.body.style.backgroundImage = "url('./imgs/rainy.jpg')";
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage = "url('./imgs/storm.jpg')";
      break;
    case "Snow":
      document.body.style.backgroundImage = "url('./imgs/snow.jpg')";
      break;
    default:
      break;
  }
}

  // identify search
  let search = document.getElementById("search");
  let searchBtn = document.getElementById("searchBtn");

  function searchCity() {
    let searchValue = search.value;
    url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchValue}`;
    gett();
  }
  searchBtn.addEventListener("click", () => {
    searchCity();
  });

  search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchCity();
    }
  });

gett();
