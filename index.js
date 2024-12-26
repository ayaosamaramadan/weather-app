const keyy= "05aef76b4355cdab242f0489ab39d93f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=fleet";

async function gett() {
  const response = await fetch(url + "&appid=" + keyy);
  const data = await response.json();
  console.log(data);

  document.getElementById("name").innerText = data.name;

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


gett();