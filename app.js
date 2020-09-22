const btn = document.querySelector('button')

btn.addEventListener("mouseover", function () {
    console.log("mouse over");
    btn.style.left = '200px';
    btn.style.top = '100px';
});
