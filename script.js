function getNumInput() {
   return document.getElementById("num-input").value;
}
function printNumInput(num) {
    document.getElementById("num-input").value = num;
}
function getGeneratePin() {
    return document.getElementById("generate-pin").value ;
 }
 function printGeneratePin(num) {
    document.getElementById("generate-pin").value = num;
 }
 





    
document.getElementById("generate-pin-btn").addEventListener("click", function(){
    var output = getGeneratePin();
    output = Math.ceil(Math.random() * 10000) + 1;
    if (output<1000) {
        output = output*10;
    }
    else if (output<100) {
        output = output*100;
    }
    else if (output<10) {
        output = output*1000;
    }
    printGeneratePin(output);


    document.getElementById("num-input").value = "";
    document.getElementById("notify-positive").style.display = "none";
    document.getElementById("notify-negative").style.display = "none";
})



var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click' , function () {
        var output =getNumInput();
        
         if (output != NaN) {
            output = output + this.id;
            printNumInput(output);
         }
    });
    
};




var operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click' , function () {
        if (this.id == "clear") {
            printNumInput("");
        }
        if (this.id=="backSpace") {
            var output = getNumInput().toString();
            
            if (output) {
                output = output.substr(0, output.length-1);
                printNumInput(output);
            }
        }
    })
    
}


function minusTryLeft() {
    var get = document.getElementById("try-left-num").innerText;
    parseFloat(get);
    var minusOne = get - 1 ;
    document.getElementById("try-left-num").innerText=minusOne;
    if (minusOne<=0) {
        document.getElementById("try-left-num").innerText=0;
        document.getElementById("submit-btn").className = "submit-btn-2";
        console.log("yes");
    }
 }



document.getElementById("submit-btn").addEventListener("click", function(){
    var check2 = getGeneratePin();
    var check1 = getNumInput();
    if (check1 == check2) {
        document.getElementById("notify-positive").style.display = "block";
        document.getElementById("notify-negative").style.display = "none";
    }
    else{
        document.getElementById("notify-negative").style.display = "block";
        document.getElementById("notify-positive").style.display = "none";


        minusTryLeft();
    }
    
})



