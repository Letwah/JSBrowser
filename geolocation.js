const root = document.getElementById("root");

const success = async ({ coords }) => {
  const { latitude, longitude } = coords;

  //talk to the weather api
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid={numbergoeshere}`
  );

  setWeather(data.list);
};

const setWeather = (list) => {
  //once I have the data create the html
  const html = list.map((item) => {
    return `<div class="item">
                <h1>${new Date(item.dt * 1000).toLocaleString()}</h1>
                <p>${Math.round(item.main.temp - 273.15)}&#8451;</p>
                <p>${item.weather[0].description}</p>
            </div>`;
  });

  //override the html with the newly created weather html
  root.innerHTML = html.join("");
};

const error = (error) => {
  console.log(error);
};

const config = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 500,
};

navigator.geolocation.getCurrentPosition(success, error, config);
