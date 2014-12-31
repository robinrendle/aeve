(function(){
document.addEventListener("DOMContentLoaded", function(){
    var checkbox = document.querySelector(".NightToggler-element"),
        switcher = document.querySelector(".NightToggler-label"),
        el = document.querySelector('div[data-nightMode]'),
        dayClass = "Container-light",
        nightClass = "Container-dark";

    switcher.addEventListener("click", function(){
        if (checkbox.checked != true) {
            el.classList.add(nightClass);
            el.classList.remove(dayClass);
        } else {
            el.classList.remove(nightClass);
            el.classList.add(dayClass);
        }
    }, false);


}, false);

})();
