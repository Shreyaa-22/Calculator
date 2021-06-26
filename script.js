var Arr = [];
var count = 0;

function hideElement() {
    document.getElementById("dis").value = "";
}

function display(val) {
    document.getElementById("dis").value += val;
    Arr.push(document.getElementById("dis").value);
    count++;
}

function calc() {
    try {
        var a = document.getElementById("dis").value;
        var ans = eval(a);
        document.getElementById("dis").value = ans;
        Arr.push(ans);
        count++;
    } catch (e) {
        document.getElementById("dis").value = "INVALID INPUT";
        setTimeout(hideElement, 500);
        Arr = [];
        count = 0;
    }
}

function clr() {
    document.getElementById("dis").value = "";
    Arr = [];
    count = 0;
}

function rem() {
    if (count == 0) {
        document.getElementById("dis").value = "";
    } else {
        Arr.pop();
        count--;
        if (count == 0) document.getElementById("dis").value = "";
        else document.getElementById("dis").value = Arr[count - 1];

    }
}
