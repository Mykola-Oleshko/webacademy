function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = ""
}

function back() {
    let bak = document.form.textview.value;
    document.form.textview.value = bak.substring(0, bak.length - 1);
}

function equal() {
    let bak = document.form.textview.value;
    if (bak) {
        document.form.textview.value = eval(bak);
    }
}