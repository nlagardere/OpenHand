const apps = [
  {name:"Horloge", icon:"schedule", url:"apps/clock.html"},
  {name:"Notes", icon:"edit", url:"apps/notes.html"},
  {name:"Photos", icon:"photo", url:"apps/photos.html"},
  {name:"Radio", icon:"radio", url:"apps/radio.html"}
];

const desktop = document.getElementById("desktop");

apps.forEach(app => {
  const card = document.createElement("md-elevated-card");
  card.className = "app-card";

  card.innerHTML = `
    <div style="padding:24px;text-align:center">
      <md-icon style="font-size:48px">${app.icon}</md-icon>
      <div style="margin-top:12px;font-size:18px">${app.name}</div>
    </div>
  `;

  card.onclick = () => openApp(app.url);
  desktop.appendChild(card);
});

window.openApp = function(url){
  document.getElementById("app-frame").src = url;
  document.getElementById("app-window").classList.add("open");
}

window.closeApp = function(){
  document.getElementById("app-window").classList.remove("open");
}
