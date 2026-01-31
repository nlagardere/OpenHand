const apps = [
  {
    name: "Horloge",
    icon: "schedule",
    url: "apps/clock.html"
  }
];

const desktop = document.getElementById("desktop");

apps.forEach(app => {

  const card = document.createElement("md-elevated-card");
  card.className = "app-card";

  card.innerHTML = `
    <div class="app-inner">
      <span class="icon">${app.icon}</span>
      <div>${app.name}</div>
    </div>
  `;

  card.onclick = () => openApp(app.url);

  desktop.appendChild(card);
});

function openApp(url){
  document.getElementById("appFrame").src = url;
  document.getElementById("appWindow").classList.add("open");
}

function closeApp(){
  document.getElementById("appWindow").classList.remove("open");
}
