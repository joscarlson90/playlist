import { songs } from "./songs.js";

export function renderSongs(songList) {
  const container = document.getElementById("playlistContainer");
  if (!container) return;

  container.innerHTML = songList
    .map(
      (s) =>
        `<div><strong>${s.artist}</strong> – ${s.title} <em>(${s.genre})</em></div>`,
    )
    .join("");
}

export function showSongsByGenre(genre) {
  const allSongs = songs[0].songs;

  if (!genre || genre.toLowerCase() === "all") {
    renderSongs(allSongs);
    return allSongs;
  }
  const filtered = allSongs.filter(
    (s) => s.genre.toLowerCase() === genre.toLowerCase(),
  );
  renderSongs(filtered);
}
