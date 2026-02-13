import { songs } from "./songs.js";

export function renderSongs(songList) {
  const container = document.getElementById("playlistContainer");
  if (!container) return;

  container.innerHTML = songList
    .map((s) => `<div>${s.artist} – ${s.title} <em>(${s.genre})</em></div>`)
    .join("");

  container.style.display = songList.length > 0 ? "block" : "none";
}

export function showSongsByGenre(genre) {
  const allSongs = songs[0].songs;

  if (!genre) {
    renderSongs(allSongs);
    return;
  }
  const filtered = allSongs.filter((s) => s.genre === genre);
  renderSongs(filtered);
}
