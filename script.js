let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");

let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");

// const div = document.getElementById("progress")
const p = document.querySelector('p')

let progress = document.getElementById("progress");

next1.onclick = function() {
    form1.style.left = "-430px";
    form2.style.left = "30px";
    progress.style.width = "230px";
    p.innerHTML = "Step 2"
};

next2.onclick = function() {
    form2.style.left = "-430px";
    form3.style.left = "30px";
    progress.style.width = "340px";
    p.innerHTML = "Step 3"
};

back1.onclick = function() {
    form1.style.left = "30px";
    form2.style.left = "430px";
    progress.style.width = "120px";
    p.innerHTML = "Step 1"
};

back2.onclick = function() {
    form2.style.left = "30px";
    form3.style.left = "430px";
    progress.style.width = "230px";
    p.innerHTML = "Step 2"
};