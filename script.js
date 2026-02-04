const playlists = [];

const form = document.getElementById("form");
const content = document.getElementById("createPlaylist");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addPlaylist();
});

function addPlaylist() {
  const name = document.getElementById("playlistName").value;
  const genre = document.getElementById("genreName").value;
  const artist = document.getElementById("artistName").value;
  const song = document.getElementById("songName").value;

  const songs = song
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const playlist = {
    name: name,
    music: {
      [genre]: {
        [artist]: songs,
      },
    },
  };

  playlists.push(playlist);

  showPlaylists();
  form.reset();
}

function showPlaylists() {
  content.innerHTML = "";

  playlists.forEach(function (list) {
    let htmlContent = `<div class="playlist"><h3>${list.name}</h3>`;

    for (const genre in list.music) {
      htmlContent += `<p><strong>Genre:</strong> ${genre}</p>`;

      for (const artist in list.music[genre]) {
        htmlContent += `<p><strong>Artist:</strong> ${artist}</p>`;
        htmlContent += `<p><strong>Låtar:</strong> ${list.music[genre][artist].join(", ")}</p>`;
      }
    }

    htmlContent += `</div>`;
    content.innerHTML += htmlContent;
  });
}
