const menu = document.getElementById("menu");
const appView = document.getElementById("appView");
const homeBtn = document.getElementById("homeBtn");

/* Horloge */
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}
setInterval(updateClock, 1000);
updateClock();

/* Charger les apps */
fetch("apps.json")
  .then(res => res.json())
  .then(apps => {
    apps.forEach(app => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="icon">${app.icon}</div>
        ${app.name}
      `;
      card.onclick = () => openApp(app.entry);
      menu.appendChild(card);
    });
  });

/* Ouvrir une app */
function openApp(url) {
  menu.style.display = "none";
  appView.style.display = "block";

  appView.innerHTML = `
    <iframe src="${url}" style="width:100%;height:100%;border:none;"></iframe>
  `;
}

/* Retour accueil */
homeBtn.onclick = () => {
  appView.style.display = "none";
  menu.style.display = "grid";
  appView.innerHTML = "";
};
