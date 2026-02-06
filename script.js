document.addEventListener("DOMContentLoaded", () => {
  const playlistContainer = document.getElementById("playlistContainer");
  const popGenre = document.getElementById("popGenre");
  const soulGenre = document.getElementById("soulGenre");
  const rockGenre = document.getElementById("rockGenre");
  const hiphopGenre = document.getElementById("hiphopGenre");
  const rnbGenre = document.getElementById("rnbGenre");

  function showSongsByGenre(genre) {
    return playlist.filter((song) => song.genre === genre);
  }

  const playlist = [
    { title: "Genom Eld", artist: "Oskar Linnros", genre: "Pop" },
    { title: "Havanna", artist: "Daniela Rathana", genre: "Pop" },
    { title: "Roll with Me", artist: "Charli xcx", genre: "Pop" },
    { title: "Din tid kommer", artist: "Håkan Hellström", genre: "Pop" },
    { title: "What A Wonderful World", artist: "Sam Cooke", genre: "Soul" },
    { title: "Lean on Me", artist: "Bill Withers", genre: "Soul" },
    { title: "Yukon", artist: "Justin Bieber", genre: "Soul" },
    {
      title: "Ain't No Mountain High Enough",
      artist: "Marvin Gaye",
      genre: "Soul",
    },
    { title: "Enter Sandman", artist: "Metallica", genre: "Rock" },
    { title: "Back In Black", artist: "AC/DC", genre: "Rock" },
    { title: "Puppet Parade", artist: "Megadeth", genre: "Rock" },
    { title: "Run to the Hills", artist: "Iron Maiden", genre: "Rock" },
    { title: "7 lr 8", artist: "Cleo", genre: "HipHop" },
    { title: "Angel", artist: "Little Simz", genre: "HipHop" },
    { title: "7/11", artist: "Beyoncé", genre: "HipHop" },
    { title: "Jump", artist: "Kris Kross", genre: "HipHop" },
    { title: "Brown Sugar", artist: "D'Angelo", genre: "R&B" },
    { title: "Folded", artist: "Kehlani", genre: "R&B" },
    { title: "What You Need", artist: "Tems", genre: "R&B" },
    { title: "Hot Body", artist: "Ayra Starr", genre: "R&B" },
  ];

  popGenre.addEventListener("click", () => {
    renderSongs(showSongsByGenre("Pop"));

  });

  soulGenre.addEventListener("click", () => {
    renderSongs(showSongsByGenre("Soul"));
  });

  rockGenre.addEventListener("click", () => {
    renderSongs(showSongsByGenre("Rock"));
  });

  hiphopGenre.addEventListener("click", () => {
    renderSongs(showSongsByGenre("HipHop"));
  });

  rnbGenre.addEventListener("click", () => {
    renderSongs(showSongsByGenre("R&B"));
  });

  function renderSongs(songs) {
    if (!playlistContainer) return;

    playlistContainer.innerHTML = songs
      .map(
        (s) =>
          `<div class="song"><ul><li><strong>${s.artist}</strong> - ${s.title} <span class="genre">(${s.genre})</span></li></ul></div>`,
      )
      .join("");

      playlistContainer.style.display = "block";
  }
});
