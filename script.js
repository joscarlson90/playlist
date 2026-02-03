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

  const songs = song.split(",").map(s => s.trim()).filter(Boolean);

  const playlist = {
    name: name,
    genre: genre,
    artist: artist,
    songs: songs,
  };
  playlists.push(playlist);

  showPlaylists();
  form.reset();
}

function showPlaylists() {
  content.innerHTML = "";

  playlists.forEach(function (list) {
    content.innerHTML += `
    <div class="playlist">
    <h3>${list.name}</h3>
    <p><strong>Genre:</strong> ${list.genre}</p>
    <p><strong>Artist:</strong> ${list.artist}</p>
    <p><strong>Låtar:</strong> ${list.songs.join(", ")}</p>
    </div>
    `;
  });
}
