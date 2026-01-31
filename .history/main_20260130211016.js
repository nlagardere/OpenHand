const apps = [
  {name:"Horloge", icon:"schedule", url:"apps/clock.html"},
  {name:"Notes", icon:"edit", url:"apps/notes.html"},
  {name:"Photos", icon:"photo", url:"apps/photos.html"}
];

const desktop = document.getElementById("desktop");

apps.forEach(app => {

  const card = document.createElement("md-elevated-card");
  card.className = "app-card";

  card.innerHTML = `
    <div class="app-inner">
      <span class="icon">${app.icon}</span>
      <div style="margin-top:12px;font-size:18px">${app.name}</div>
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
