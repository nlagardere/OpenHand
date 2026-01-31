const apps = [
  { name:"Horloge", icon:"🕒", url:"apps/clock/clock.html" },
  { name:"Notes", icon:"📝", url:"apps/notes/notes.html" },
  { name:"Photos", icon:"🖼️", url:"apps/photos.html" }
];

const desktop = document.getElementById("desktop");

apps.forEach(app => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <div class="icon">${app.icon}</div>
    <div class="name">${app.name}</div>
  `;

  div.onclick = () => openApp(app.url);
  desktop.appendChild(div);
});

/* Horloge topbar */

function tick(){
  clock.textContent =
    new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
}
setInterval(tick,1000);
tick();

/* App window */

function openApp(url){
  appFrame.src = url;
  appWindow.style.display = "flex";
}

function closeApp(){
  appWindow.style.display = "none";
}
