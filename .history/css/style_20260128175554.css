/* =========================
   OpenHand – Clean UI
   ========================= */

:root {
  --bg: #eef1f5;
  --surface: #ffffff;
  --accent: #5b8def;
  --accent-soft: #e8efff;
  --text-main: #1f2937;
  --text-soft: #6b7280;
  --radius: 22px;
  --shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

* {
  box-sizing: border-box;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(180deg, #f6f8fb, var(--bg));
  color: var(--text-main);
  display: flex;
  flex-direction: column;
}

/* =========================
   Header
   ========================= */

header {
  height: 80px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  gap: 20px;
}

#clock {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

#search {
  flex: 1;
  max-width: 340px;
  padding: 12px 18px;
  font-size: 1.1rem;
  border-radius: 999px;
  border: none;
  background: var(--surface);
  box-shadow: var(--shadow);
  outline: none;
}

#search::placeholder {
  color: var(--text-soft);
}

#homeBtn {
  padding: 12px 26px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 999px;
  border: none;
  background: var(--accent);
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(91, 141, 239, 0.4);
}

#homeBtn:active {
  transform: scale(0.97);
}

/* =========================
   Menu grid
   ========================= */

#menu {
  flex: 1;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 32px;
}

/* =========================
   Cards
   ========================= */

.card {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 36px 24px;
  text-align: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.icon {
  font-size: 3.2rem;
  margin-bottom: 18px;
}

.card span {
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
}

/* =========================
   App view
   ========================= */

#appView {
  flex: 1;
  display: none;
  background: var(--surface);
}

/* =========================
   Animations
   ========================= */

.fade {
  animation: fadeIn 0.25s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
