const btn = document.querySelector('button')

btn.addEventListener("click", function () {
    alert("clicked");
});

btn.addEventListener("mouseover", function () {
    btn.innerText = "stop hovering";
});
btn.addEventListener("mouseout", function () {
    btn.innerText = "Click me";
});

window.addEventListener('scroll',function () {
    console.log("stop scrolling");

});