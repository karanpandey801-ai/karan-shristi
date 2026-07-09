// =======================
// Read More / Hide
// =======================

function togglePoem(button){

    const poem = button.previousElementSibling;

    poem.classList.toggle("open");

    if(poem.classList.contains("open")){
        button.innerHTML = "Hide ❤️";
    }else{
        button.innerHTML = "Continue Reading ❤️";
    }

}

// =======================
// Playlist
// =======================

function playSong(card, videoId, title, artist){

    document.getElementById("ytplayer").src =
    "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

    document.getElementById("songTitle").innerText = title;
    document.getElementById("artistName").innerText = artist;

    document.querySelectorAll(".song").forEach(song=>{
        song.classList.remove("active");
    });

    card.classList.add("active");
}

// =======================
// Scroll Animation
// =======================

const cards = document.querySelectorAll(".card,.playlist-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".7s ease";

    observer.observe(card);

});
