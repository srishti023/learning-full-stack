let main = document.querySelector("main");
let btn = document.querySelector("button");
const quotes = [
    "Stay rare.",
    "Trust the vibe.",
    "Energy speaks.",
    "Do it for you.",
    "Own your magic.",
    "Less noise, more soul.",
    "Built different.",
    "Dream in silence.",
    "Focus > Feelings.",
    "Grow through it.",
    "Stay unpredictable.",
    "Evolve quietly.",
    "Mindset is everything.",
    "Unbothered.",
    "Prove them wrong.",
    "Choose yourself.",
    "Hustle in peace.",
    "Good things take time.",
    "Stay solid.",
    "Never average."
  ];

btn.addEventListener("click", ()=>{
    let index = Math.floor(Math.random()*quotes.length)

    let h1 = document.createElement("h1");
    let x = Math.random()*100;
    let y = Math.random()*100;
    let r = Math.floor(Math.random()*360);

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    h1.innerHTML=quotes[index];
    h1.style.color=`rgb(${c1},${c2},${c3})`;
    h1.style.fontSize="50px";
    h1.style.position="absolute"
    h1.style.top=y+"%";
    h1.style.left=x+"%";
    h1.style.rotate= r+"deg";

    
    main.appendChild(h1);
    // console.log(quotes[index])
})