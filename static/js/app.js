(function(){
    "use strict";

    var NightToggler = (function(){
        var nightToggle = {},
        checkbox = document.querySelector(".NightToggler-element"),
        body = document.body,
        switcher = document.querySelector(".NightToggler-label"),
        nightClass = "is-darkMode";

        nightToggle.init = function(){
            checkbox.checked = false; // reset checkbox just in case
            nightToggle.bind();
        };

        nightToggle.bind = function(){
            switcher.addEventListener("click", function(){
                if (checkbox.checked !== true) {
                    body.classList.toggle(nightClass);
                } else {
                    body.classList.remove(nightClass);
                }
            }, false);
        };
        return nightToggle;
    })();

    var App = {
        init: function(){
            if (this.cutsTheMustard()) {
                document.documentElement.className = "js";
                NightToggler.init();
            }
        },

        cutsTheMustard: function(){
            return ("querySelector" in document && "addEventListener" in window );
        }
    };

    App.init();

})();
