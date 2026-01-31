let allApps = [];
let currentView = "home";

fetch("apps.json")
  .then(r => r.json())
  .then(apps => {
    allApps = apps;
    showCategories();
  });

function showCategories() {
  currentView = "home";
  menu.innerHTML = "";
  appView.style.display = "none";
  menu.style.display = "grid";

  const categories = [...new Set(allApps.map(a => a.category))];

  categories.forEach(cat => {
    createCard(cat, "📁", () => showApps(cat));
  });

  createCard("Toutes les applications", "🧩", () => showApps());
}

function showApps(category = null) {
  currentView = "apps";
  menu.innerHTML = "";
  const apps = category
    ? allApps.filter(a => a.category === category)
    : allApps;

  apps.forEach(app => {
    createCard(app.name, app.icon, () => openApp(app.entry));
  });
}

function createCard(label, icon, action) {
  const card = document.createElement("div");
  card.className = "card fade";
  card.innerHTML = `<div class="icon">${icon}</div>${label}`;
  card.onclick = action;
  menu.appendChild(card);
}

function openApp(url) {
  menu.style.display = "none";
  appView.style.display = "block";
  appView.innerHTML = `
    <iframe src="${url}" style="width:100%;height:100%;border:none;"></iframe>
  `;
}

homeBtn.onclick = showCategories;

/* Recherche */
search.oninput = () => {
  const q = search.value.toLowerCase();
  menu.innerHTML = "";
  allApps
    .filter(a => a.name.toLowerCase().includes(q))
    .forEach(a =>
      createCard(a.name, a.icon, () => openApp(a.entry))
    );
};
