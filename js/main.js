let oCal =  document.getElementById('calculator');
let aList = oCal.querySelectorAll('li a');
let eMainLine = oCal.querySelector('.main-line');
let itemDev = ['C', '(', ')', 'D', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+' ];
let itemMon = [];
let x = '';
let y = '';

aList[0].onclick = function () {
    eMainLine.innerText = null;
};
for (let i=0; i<aList.length; i++){
    aList[i].onclick = function () {
        itemMon[i] = this.innerText;
        x += itemMon[i];
        y += itemDev[i];
        console.log(itemMon[i]);
        eMainLine.innerText = x;
    };
    aList[0].onclick = function () {
        eMainLine.innerText = null;
        x = '';
        y = '';
    };
    aList[18].onclick = function () {
        console.log(eval(y));
        eMainLine.innerText = eval(y);
    };
}
