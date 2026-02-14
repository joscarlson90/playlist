import { showSongsByGenre } from "./genre.js";

function attachGenreHandlers() {
  console.log("attachGenreHandlers RUNS");
  const buttons = document.querySelectorAll(".button");
  const playlist = document.getElementById("playlistContainer");

  console.log("buttons found:", buttons.length);
  console.log("playlist:", playlist);

  let currentGenre = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const genre = button.dataset.genre;
      console.log("CLICK:", genre);

      if (playlist.classList.contains("is-open") && genre === currentGenre) {
        console.log("closing");

        playlist.classList.remove("is-open");
        currentGenre = null;
        return;
      }

      console.log("opening / switching");
      playlist.classList.add("is-open");
      currentGenre = genre;
      showSongsByGenre(genre);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  attachGenreHandlers();
});
