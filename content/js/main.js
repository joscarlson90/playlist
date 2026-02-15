import { showSongsByGenre } from "./genre.js";

function attachGenreHandlers() {
  const buttons = document.querySelectorAll(".button");
  const playlist = document.getElementById("playlist-container");

  let currentGenre = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const genre = button.dataset.genre;

      if (playlist.classList.contains("is-open") && genre === currentGenre) {
        playlist.classList.remove("is-open");
        currentGenre = null;
        return;
      }

      playlist.classList.add("is-open");
      currentGenre = genre;
      showSongsByGenre(genre);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  attachGenreHandlers();
});
