const apps = [
  { name:"Horloge", icon:"🕒", url:"apps/clock/clock.html" },
  { name:"Notes", icon:"📝", url:"apps/notes/notes.html" },
  { name:"Photos", icon:"🖼️", url:"apps/photos/photos.html" },
  { name:"Internet", icon:"🌐", url:"apps/internet/internet.html" }
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

const curseur = document.getElementById('curseur');
document.addEventListener('mousemove', e => {
  curseur.style.left = e.clientX + 'px';
  curseur.style.top = e.clientY + 'px';
});

/* ===== CURSEUR ROUGE ===== */

document.addEventListener("mousemove", e => {
    const c = document.getElementById("curseur");
    c.style.left = e.clientX + "px";
    c.style.top = e.clientY + "px";
});


/* ===== PIN LOGIN → MUSIQUE PILOTE LE BOOT ===== */

const PIN_CODE = "1234";

function checkPin() {
    const val = document.getElementById("pinInput").value;

    if (val === PIN_CODE) {

        document.getElementById("lockscreen").style.display = "none";

        const music = document.getElementById("music");
        const load = document.getElementById("loadingScreen");
        const bar = document.querySelector(".loaderBar");

        load.style.display = "flex";

        // reset barre
        bar.style.width = "0%";

        music.currentTime = 0;

        music.play().catch(()=>{});

        // quand la durée est connue → on peut suivre la progression
        music.addEventListener("timeupdate", () => {
            if (music.duration) {
                const progress = (music.currentTime / music.duration) * 100;
                bar.style.width = progress + "%";
            }
        });

        // fin musique = fin boot
        music.addEventListener("ended", () => {
            load.style.display = "none";
        });

    } else {
        document.getElementById("pinError").textContent = "Code incorrect";
    }
}


/* ===== SHUTDOWN ===== */

document.getElementById("shutdownbtn").addEventListener("click", () => {

    alert("Ordinateur éteint ✅");

    document.getElementById("lockscreen").style.display = "flex";

    const music = document.getElementById("music");
    music.pause();
    music.currentTime = 0;

    const bar = document.querySelector(".loaderBar");
    bar.style.width = "0%";
});
