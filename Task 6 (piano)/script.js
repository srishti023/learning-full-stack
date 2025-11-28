// Select all keys
const allKeys = document.querySelectorAll(".white, .black");

// CLICK EVENT — play tune
allKeys.forEach((key, index) => {
    key.addEventListener("click", () => {
        playTune(index);
    });
});

// FUNCTION TO PLAY SOUND
function playTune(index) {
    let tuneNumber = 28 + index; // (28 to 62 or 63)
    let audio = new Audio(`tunes/${tuneNumber}.mp3`);
    audio.currentTime = 0;
    audio.play();
}

// KEYBOARD MAPPING (36 keys = 28–63)
const keyBindings = [
    "a","w","s","e","d","f","t","g","y","h","u","j","k", // octave 1
    "o","l","p",";", "'",                              // depends on layout
    "z","x","c","v","b","n","m",                       // octave 2 white
    "1","2","3","4","5","6","7","8"                    // extra notes
];

// KEYDOWN EVENT
document.addEventListener("keydown", (e) => {
    let key = e.key.toLowerCase();

    let index = keyBindings.indexOf(key);
    if (index !== -1) {
        playTune(index);

        // optional: add animation
        allKeys[index].classList.add("active");
        setTimeout(() => allKeys[index].classList.remove("active"), 150);
    }
});