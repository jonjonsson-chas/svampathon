// --- Väder ---
const apiKey = "DIN_API_KEY"; // byt när nyckeln fungerar
const city = "Stockholm";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=se`;

fetch(weatherUrl)
  .then(res => {
    if (!res.ok) throw new Error("HTTP-fel " + res.status);
    return res.json();
  })
  .then(data => {
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    document.getElementById("weather").innerText =
      `Just nu i ${city}: ${temp}°C, ${desc}`;
  })
  .catch(err => {
    console.error("Fel:", err);
    document.getElementById("weather").innerText = "Kunde inte hämta väderdata.";
  });

// --- Röstning ---
let votes = { mango: 0, banana: 0, cherry: 0 };

function vote(team) {
  votes[team]++;
  document.getElementById(`${team}-votes`).innerText = votes[team];
}
