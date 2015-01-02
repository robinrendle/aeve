(function(){
document.addEventListener("DOMContentLoaded", function(){
    var checkbox = document.querySelector(".NightToggler-element"),
        body = document.body,
        switcher = document.querySelector(".NightToggler-label"),
        nightClass = "is-darkMode";

        checkbox.checked = false; // reset checkbox

    switcher.addEventListener("click", function(){
        if (checkbox.checked != true) {
            body.classList.toggle(nightClass);
        } else {
            body.classList.remove(nightClass);
        }
    }, false);


}, false);

})();
