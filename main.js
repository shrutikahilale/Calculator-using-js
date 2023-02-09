let clearBtn = document.getElementById('clear-btn');
let deleteBtn = document.getElementById('delete-btn');
let inputBox = document.getElementById('input-box');
let enterBtn = document.getElementById('enter-btn');
let operators = document.getElementsByClassName('operators');

for(let i=0;i<operators.length;i++) {

    operators[i].addEventListener('click', ()=> {
        let input = inputBox.value;
        input = input + operators[i].innerHTML;
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

        let op1 = 0;
        let operator = "";
        let op2 = 0;

        let i=0;

        while(i<input.length) {
            if(input[i] == "+" || input[i] == '-' || input[i] == "*" || input[i] == "/") {
                operator = input[i];
                break;
            }
            else {
                op1 = (op1*10) + Number(input[i]);                
            }
            i++;
        }

        i++;

        while (i<input.length) {
            op2 = (op2*10) + Number(input[i]);
            i++;
        }
   
        let result = 0;

        if(operator == "+") {
            result = op1 + op2;
        }
        else if(operator == "*") {            
            result = op1 * op2;
        }
        else if(operator == '/') {
            result = op1 / op2;
        }
        else {
            result = op1 - op2;
        }

        // show into input-box as result
        inputBox.value = result;
    
});