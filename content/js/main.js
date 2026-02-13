import { showSongsByGenre } from "./genre.js";

function attachGenreHandlers() {
  document.getElementById("allGenre")?.addEventListener("click", () => {
    showSongsByGenre();
  });

  document.getElementById("popGenre")?.addEventListener("click", () => {
    showSongsByGenre("Pop");
  });

  document.getElementById("soulGenre")?.addEventListener("click", () => {
    showSongsByGenre("Soul");
  });

  document.getElementById("rockGenre")?.addEventListener("click", () => {
    showSongsByGenre("Rock");
  });

  document.getElementById("hiphopGenre")?.addEventListener("click", () => {
    showSongsByGenre("HipHop");
  });

  document.getElementById("rnbGenre")?.addEventListener("click", () => {
    showSongsByGenre("R&B");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  attachGenreHandlers();
});

