import "./style.css";

const tracks = [
  { id: 1, title: "Night Drive", artist: "Echo Lane", bpm: 92 },
  { id: 2, title: "City Lights", artist: "Neon Cloud", bpm: 110 },
  { id: 3, title: "Ocean Waves", artist: "Blue Motion", bpm: 84 },
  { id: 4, title: "Skyline", artist: "Astra Pulse", bpm: 128 }
];

const keys = {
  theme: "music-landing-theme",
  playlist: "music-landing-playlist",
  genre: "music-landing-genre"
};

const playlistEl = document.querySelector("#playlist");
const gridEl = document.querySelector("#trackGrid");
const themeToggleEl = document.querySelector("#themeToggle");
const genreFormEl = document.querySelector("#genreForm");
const genreInputEl = document.querySelector("#genreInput");
const genreMessageEl = document.querySelector("#genreMessage");
const greetingEl = document.querySelector("#timeGreeting");

const state = {
  playlist: JSON.parse(localStorage.getItem(keys.playlist) ?? "[]")
};

function savePlaylist() {
  localStorage.setItem(keys.playlist, JSON.stringify(state.playlist));
}

function renderPlaylist() {
  if (!playlistEl) return;

  if (state.playlist.length === 0) {
    playlistEl.innerHTML = "<li>Пока пусто. Добавь первый трек из подборки.</li>";
    return;
  }

  playlistEl.innerHTML = state.playlist
    .map((track) => `<li>${track.title} - ${track.artist} (${track.bpm} BPM)</li>`)
    .join("");
}

function addTrack(trackId) {
  const track = tracks.find((item) => item.id === trackId);
  if (!track) return;

  const exists = state.playlist.some((item) => item.id === track.id);
  if (exists) return;

  state.playlist.push(track);
  savePlaylist();
  renderPlaylist();
}

function renderTracks() {
  if (!gridEl) return;

  gridEl.innerHTML = tracks
    .map(
      (track) => `
      <article class="track-card">
        <h3>${track.title}</h3>
        <p class="track-meta">${track.artist} · ${track.bpm} BPM</p>
        <button class="track-action" type="button" data-track-id="${track.id}">
          Добавить в плейлист
        </button>
      </article>
    `
    )
    .join("");
}

function setupTrackActions() {
  if (!gridEl) return;
  gridEl.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const button = target.closest("button[data-track-id]");
    if (!button) return;

    const trackId = Number(button.dataset.trackId);
    addTrack(trackId);
  });
}

function setGreeting() {
  if (!greetingEl) return;
  const hour = new Date().getHours();
  let greeting = "Добро пожаловать!";
  if (hour >= 5 && hour < 12) greeting = "Доброе утро! Пора включать любимые треки.";
  if (hour >= 12 && hour < 18) greeting = "Добрый день! Подними настроение музыкой.";
  if (hour >= 18 && hour < 23) greeting = "Добрый вечер! Отличное время для плейлиста.";
  if (hour >= 23 || hour < 5) greeting = "Доброй ночи! Спокойные треки уже ждут тебя.";
  greetingEl.textContent = greeting;
}

function setupTheme() {
  if (!themeToggleEl) return;

  const savedTheme = localStorage.getItem(keys.theme);
  if (savedTheme === "light") document.body.classList.add("light");

  themeToggleEl.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const nextTheme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem(keys.theme, nextTheme);
  });
}

function setupGenreForm() {
  if (!genreFormEl || !genreInputEl || !genreMessageEl) return;

  const savedGenre = localStorage.getItem(keys.genre);
  if (savedGenre) {
    genreInputEl.value = savedGenre;
    genreMessageEl.textContent = `Текущий выбор: ${savedGenre}`;
  }

  genreFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = genreInputEl.value.trim();

    if (value.length < 2) {
      genreMessageEl.textContent = "Введите жанр минимум из 2 символов.";
      return;
    }

    localStorage.setItem(keys.genre, value);
    genreMessageEl.textContent = `Сохранено! Сегодня слушаем: ${value}`;
  });
}

renderTracks();
renderPlaylist();
setupTrackActions();
setGreeting();
setupTheme();
setupGenreForm();
