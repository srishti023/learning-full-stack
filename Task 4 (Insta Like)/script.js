let post = document.querySelector(".post");
let heart = document.querySelector(".img");

post.addEventListener("dblclick", function() {

    heart.classList.remove("active");
    void heart.offsetWidth;
    heart.classList.add("active");
});