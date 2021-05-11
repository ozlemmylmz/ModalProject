var modal = document.querySelector("#myModal");

var modalBtn = document.querySelector("#modalBtn");

var closeBtn = document.querySelector("#close");

modalBtn.onclick = function () {
    modal.style.display = "block";
}

closeBtn.onclick = function () {
    modal.style.display  = "none";
}

window.onclick = function (event) {
    if(event.target === modal){
        modal.style.display  = "none";
    }
}