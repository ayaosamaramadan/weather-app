const keyy= "05aef76b4355cdab242f0489ab39d93f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function gett() {
  const response = await fetch(url + "&appid=" + keyy);
  const data = await response.json();
  console.log(data);
}

gett();