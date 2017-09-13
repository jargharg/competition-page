function isIE() {
    var myNav = navigator.userAgent.toLowerCase()
    return myNav.indexOf("msie") != -1
        ? parseInt(myNav.split("msie")[1])
        : false
}

function ie9Check() {
    var IEcheck = isIE()
    if (IEcheck && IEcheck < 10) {
        var labels = document.getElementsByClassName("form__ie9label")
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.display = "inline"
        }
    } else {
        var labels = document.getElementsByClassName("form__ie9label")
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.display = "none"
        }
    }
}

(ie9Check)()