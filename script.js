const text =
"Thank you Ammi for giving me love, strength, care, and support every single day ❤️";

let index = 0;

function typeText(){

    if(index < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 50);
    }
}

typeText();

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

music.volume = 1;

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play()
        .then(() => {

            musicBtn.innerHTML = "⏸ Pause Music";

        })
        .catch((error) => {

            console.log(error);

            alert("Browser blocked autoplay. Click button again.");
        });

    }else{

        music.pause();

        musicBtn.innerHTML = "▶ Play Music";
    }

});