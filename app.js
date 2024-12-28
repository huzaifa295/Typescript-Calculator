var inp = document.getElementById('inp');
function clickBtn(num) {
    inp.value += num;
    console.log(num);
}
function delInp() {
    inp.value = '';
}
function outputValue() {
    var result = eval(inp.value);
    inp.value = result;
    console.log(result);
}
function delLast() {
    inp.value = inp.value.slice(0, -1);
}
