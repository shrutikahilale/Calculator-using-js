let clearBtn = document.getElementById('clear-btn');
let deleteBtn = document.getElementById('delete-btn');
let inputBox = document.getElementById('input-box');
let enterBtn = document.getElementById('enter-btn');
let operators = document.getElementsByClassName('ops');
let numbers = document.getElementsByClassName('numbers-col');

for(let i=0;i<operators.length;i++) {
    operators[i].addEventListener('click', ()=> {
        let input = inputBox.value;
        input = input + operators[i].innerHTML;
        inputBox.value = input;
    });
}

for(let i=0;i<numbers.length;i++) {
    numbers[i].addEventListener('click', ()=> {
        let input = inputBox.value;
        input = input + numbers[i].innerHTML;
        inputBox.value = input;
    });
}

clearBtn.addEventListener('click', ()=>{
    inputBox.value = "";
});

deleteBtn.addEventListener('click', ()=> {
    let input = inputBox.value;
    inputBox.value = input.substring(0, input.length-1);
});

enterBtn.addEventListener('click', ()=>{
    let input = inputBox.value;

    // 10*9-16÷8 = 90-2 = 88
    // 10, 9, 16, 8
    // *, -, ÷
    // 

    // split numbers          
    let numbers = input.split(/\+|\-|\x|\÷/g);

    // split operators: 
    // first replace all numbers [0-9] with "" empty string 
    // then split at "" empty string
    let ops = input.replace(/[0-9]/g, "").split("");


    /**    MOST POWERFUL METHOD FOR ARRAYS: THE SPLICE METHOD
     * The splice() method adds and/or removes array elements.
     * The splice() method overwrites the original array.  
     * Syntax: array.splice(index, howmany, item1, ....., itemX)
     * index	Required.
                The position to add/remove items.
                Negative value defines the position from the end of the array.
     * howmany	Optional.
                Number of items to be removed.
     * item1, ..., itemX	Optional.
                New elements(s) to be added.

     */


    // we need to first divide, multiply, subtract and then add


    // get index of divide operator
    let idx ;
    idx = ops.indexOf('÷');// if ÷ dne, then idx = -1;
    while(idx!=-1) {// do until no divide operation remains

        // go to indx 2, whatever the numbers at idx and idx+1, replace it with their division result
        numbers.splice(idx, 2, numbers[idx]/numbers[idx+1]);

        // in ops array, just remove the ÷ operator
        ops.splice(idx,1);

        // get next index of ÷
        idx = ops.indexOf('÷');
    }


    // do same for other operations ....
    idx = ops.indexOf('x');
    while(idx!=-1) {
        numbers.splice(idx, 2, numbers[idx]*numbers[idx+1]);
        ops.splice(idx,1);
        idx = ops.indexOf('x');
    }

    idx = ops.indexOf('-');
    while(idx!=-1) {
        numbers.splice(idx, 2, numbers[idx]-numbers[idx+1]);
        ops.splice(idx,1);
        idx = ops.indexOf('-');
    }

    idx = ops.indexOf('+');
    while(idx!=-1) {
        // user parseFloat to avoid string concatenation
        numbers.splice(idx, 2, parseFloat(numbers[idx])+parseFloat(numbers[idx+1]));
        ops.splice(idx,1);
        idx = ops.indexOf('+');
    }

    // show result 
    inputBox.value = numbers[0];
});