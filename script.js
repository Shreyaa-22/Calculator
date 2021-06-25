function hideElement() {
    document.getElementById("dis").value = "";
}

function display(val) {
    document.getElementById("dis").value += val;
}

function calc() {
    try {
        var a = document.getElementById("dis").value;
        console.log(typeof (a));
        var ans = eval(a);
        document.getElementById("dis").value = ans;
    } catch (e) {
        document.getElementById("dis").value = "INVALID INPUT";
        setTimeout(hideElement, 500);
    }
}

function clr() {
    document.getElementById("dis").value = "";
}

function rem() {
    var a = document.getElementById("dis").value;
    var cleared = a.slice(0, -1);
    document.getElementById("dis").value = cleared;
}