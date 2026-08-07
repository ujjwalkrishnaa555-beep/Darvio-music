// ===============================
// Darvio Music Database
// ===============================

const songs = [
    {
        title: "Vaa Senthaazhini",
        artist: "G.V. Prakash Kumar",
        image: "images/vaa.jpg",
        file: "songs/vaa.mp3"
    },

    {
        title: "Idhazhin Oram",
        artist: "Anirudh Ravichander",
        image: "images/idhazhin.jpg",
        file: "songs/idhazhin.mp3"
    }
];


// Load Trending Songs

const trending = document.getElementById("trendingSongs");

songs.forEach((song)=>{

    const card = document.createElement("div");

    card.className = "song-card";

    card.innerHTML = `
        <img src="${song.image}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
    `;


    card.onclick = ()=> playSong(song);


    trending.appendChild(card);

});



// Load Made For You

const made = document.getElementById("madeForYou");


songs.forEach((song)=>{

    const card = document.createElement("div");

    card.className = "song-card";

    card.innerHTML = `
        <img src="${song.image}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
    `;


    card.onclick = ()=> playSong(song);


    made.appendChild(card);

});




// Player

const audio = new Audio();


function playSong(song){

    document.getElementById("playerImage").src = song.image;

    document.getElementById("playerTitle").innerText = song.title;

    document.getElementById("playerArtist").innerText = song.artist;


    audio.src = song.file;

    audio.play();

    document.getElementById("playBtn").innerText="⏸";

}


document.getElementById("playBtn").onclick = ()=>{

    if(audio.paused){
        audio.play();
        document.getElementById("playBtn").innerText="⏸";
    }
    else{
        audio.pause();
        document.getElementById("playBtn").innerText="▶";
    }

};
