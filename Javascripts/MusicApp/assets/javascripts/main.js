window.addEventListener("load", init);

var musicPlayer;
function init() {
    musicPlayer = document.querySelector("#player");
    loadSongs();
}

function loadSongs() {
    var trending_ul = document.querySelector("#trending-list");
    var latest_ul = document.querySelector("#latest-list");
    // for (const song_obj of songs) {
    //     var li = document.createElement("li");
    //     ul.appendChild(li);    
    // }

    songs.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        var songName = document.createElement("h3");
        var btn = document.createElement("button");
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-danger w-100";
        img.src = obj.song_thumbnail;
        img.className = "w-100";
        songName.innerHTML = obj.song_name;
        li.setAttribute("title",obj.song_id);
        li.appendChild(img);
        li.appendChild(songName);
        li.appendChild(btn);
        li.addEventListener("click", playSong);
        trending_ul.appendChild(li);
        // latest_ul.appendChild(li);
    });
    
}

function playSong() {
    var song_id = this.title;
    for(var i = 0; i < songs.length; i++) {
        if(songs[i].song_id == song_id) {
            var song_url = songs[i].song_url;
            break;
        }
    }
    musicPlayer.src = song_url;
    musicPlayer.play();
}