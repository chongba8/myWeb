//切换特效
function showNew1(n) {
    for (var i = 1; i <= 4; i++) {
        var curCon = document.getElementById("new1_" + i);
        var curBtn = document.getElementById("newc1_" + i);
        if (n == i) {
            curBtn.style.display = "block";
            curCon.className = "t01"
        } else {
            curBtn.style.display = "none";
            curCon.className = "";
        }
    }
}
function showNew2(n) {
    for (var i = 1; i <= 2; i++) {
        var curCon = document.getElementById("new2_" + i);
        var curBtn = document.getElementById("newc2_" + i);
        if (n == i) {
            curBtn.style.display = "block";
            curCon.className = "t01"
        } else {
            curBtn.style.display = "none";
            curCon.className = "";
        }
    }
}
function showNew3(n) {
    for (var i = 1; i <= 2; i++) {
        var curCon = document.getElementById("new3_" + i);
        var curBtn = document.getElementById("newc3_" + i);
        if (n == i) {
            curBtn.style.display = "block";
            curCon.className = "t01";

        } else {
            curBtn.style.display = "none";
            curCon.className = "";
        }
    }
}
function showPH(n) {
    for (var i = 1; i <= 4; i++) {
        var curCon = document.getElementById("ph_" + i);
        var curBtn = document.getElementById("phc_" + i);
        if (n == i) {
            curBtn.style.display = "block";
            curCon.className = "red"
        } else {
            curBtn.style.display = "none";
            curCon.className = "";
        }
    }
}
