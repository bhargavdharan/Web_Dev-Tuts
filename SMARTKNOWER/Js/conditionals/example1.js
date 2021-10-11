// -----example-1-----

const checkBox = document.querySelector('input');
const para = document.querySelector('p');


let shoppingDone = false;

checkBox.addEventListener('change', function () {
    checkBox.disabled = true;
    shoppingDone = true;
    updateAllowance();
});

function updateAllowance() {
    
    var childAllowance;
    if (shoppingDone === true) {
        childAllowance = 10;
    } else {
        childAllowance = 5;
    }

    para.textContent = 'Child has earned $' +childAllowance+ ' this week.'

}

updateAllowance();