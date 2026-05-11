let btn = document.querySelector("button");
let grow = 0
let inn = document.querySelector(".inner")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

btn.addEventListener("click",function(){
    let num =50 + Math.floor(Math.random()*50);
    grow=0;
    h2.innerHTML=`Download will be completed in ${num/10} sec`
    btn.style.pointerEvents="none"
    btn.style.opacity="0.5"
    
    let int = setInterval(() => {
        grow++
        inn.style.width = grow+"%"
        h1.innerHTML=grow+"%"
    }, num);

    setTimeout(() => {
        clearInterval(int);
    }, num*100);
})