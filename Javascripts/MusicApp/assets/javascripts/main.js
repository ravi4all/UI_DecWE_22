window.addEventListener("load", init);

var musicPlayer;
var song_id;
function init() {
    musicPlayer = document.querySelector("#player");
    document.querySelector("#nextSong").addEventListener("click", playNextSong);
    loadSongs();
}

function loadSongs() {
    var trending_ul = document.querySelector("#trending-list");
    var latest_ul = document.querySelector("#latest-list");
    // for (const song_obj of songs) {
    //     var li = document.createElement("li");
    //     ul.appendChild(li);    
    // }

    songs.forEach(function (obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        var songName = document.createElement("h3");
        var btn = document.createElement("button");
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-danger w-100";
        img.src = obj.song_thumbnail;
        img.className = "w-100";
        songName.innerHTML = obj.song_name;
        li.setAttribute("title", obj.song_id);
        li.appendChild(img);
        li.appendChild(songName);
        li.appendChild(btn);
        li.addEventListener("click", playSong);
        trending_ul.appendChild(li);
        // latest_ul.appendChild(li);
        btn.addEventListener("click", addToPlaylist);
    });

}

function playSong() {
    song_id = this.title;
    // for (var i = 0; i < songs.length; i++) {
    //     if (songs[i].song_id == song_id) {
    //         var song_url = songs[i].song_url;
    //         break;
    //     }
    // }
    var song_obj = songs.filter(function(obj){
        return obj.song_id == song_id;
    });

    musicPlayer.src = song_obj[0].song_url;
    musicPlayer.play();
}

function addToPlaylist() {
    var ul = document.querySelector("#playlist");
    var li = document.createElement("li");
    var song_id = this.parentElement.title;
    // console.log(this);
    var song_obj = songs.filter(function(obj){
        return obj.song_id == song_id;
    });
    song_obj = song_obj[0];
    // for (var i = 0; i < songs.length; i++) {
    //     if (songs[i].song_id == song_id) {
    //         song_obj = songs[i];
    //         break;
    //     }
    // }
    // console.log(song_obj);
    var img = document.createElement("img");
    var songName = document.createElement("h3");
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className = "btn btn-danger w-100";
    img.src = song_obj.song_thumbnail;
    img.className = "w-100";
    songName.innerHTML = song_obj.song_name;
    li.setAttribute("title", song_obj.song_id);
    li.appendChild(img);
    li.appendChild(songName);
    li.appendChild(btn);
    li.addEventListener("click", playSong);
    ul.appendChild(li);
}

function playNextSong() {
    var nextSongId = parseInt(song_id) + 1;
    var song_obj = songs.filter(function(obj){
        return obj.song_id == nextSongId;
    });
    // console.log(nextSongId,song_obj);

    musicPlayer.src = song_obj[0].song_url;
    musicPlayer.play();
    song_id = nextSongId;
}