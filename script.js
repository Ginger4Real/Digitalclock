let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

icons.onclick = () => {
  section.classList.toggle("dark");
};

setInterval(() => {
  let date = new Date(),
    options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, 
      timeZone: "Europe/Amsterdam" 
    };

  let timeString = date.toLocaleTimeString("nl-NL", options);

  document.querySelector(".hour_num").innerText = timeString.substr(0, 2);
  document.querySelector(".min_num").innerText = timeString.substr(3, 2);
  document.querySelector(".sec_num").innerText = timeString.substr(6, 2);
  document.querySelector(".am_pm").innerText = '';
}, 1000);
document.getElementById('year')
.textContent = new Date()
.getFullYear();
