let buttonNumber = document.querySelectorAll(".button.number");
let resultScreen = document.querySelector(".display");
let clear = document.querySelector(".ac");
let negative = document.querySelector(".pm");
let percentage = document.querySelector(".percent");
let operators = document.querySelectorAll(".operator");
let equalize = document.querySelector(".equal");
let firstOperand = "";
let secondOperand = "";
let total = 0;
let finalTotal = 0;

buttonNumber.forEach(item => {

    item.addEventListener("click", function (e) {

        if ((resultScreen.innerHTML == "0") && (e.target.innerHTML == "0")) {
            resultScreen.innerHTML += "";
        } else if ((resultScreen.innerHTML.length != 0) && ((typeof firstOperand) === "number")) {

            secondOperand += e.target.innerHTML;
            secondOperand = Number(secondOperand);
            resultScreen.innerHTML = secondOperand;


        } else if ((resultScreen.innerHTML.length != 0)) {

            if (resultScreen.innerHTML[0] == "0") resultScreen.innerHTML = "";

            resultScreen.innerHTML += e.target.innerHTML;

        }

    });

});

clear.addEventListener("click", () => {

    resultScreen.innerHTML = "0";
    firstOperand = "";
    secondOperand = "";
    total = 0;
    // operators.forEach(item => {
    //     item.style.backgroundColor = "#f1a33c";
    //     item.style.color = "white";

    // });

});

negative.addEventListener("click", () => {

    if (resultScreen.innerHTML == "0") {

        resultScreen.innerHTML = "-" + "0";

    } else if (resultScreen.innerHTML[0] == "-") {

        resultScreen.innerHTML = resultScreen.innerHTML.slice(1);

    } else {

        resultScreen.innerHTML = "-" + resultScreen.innerHTML;
    }

});

percentage.addEventListener("click", () => {

    resultScreen.innerHTML = Number(resultScreen.innerHTML) / 100;

});


operators.forEach(function (item) {

    item.addEventListener("click", (e) => {

        let compute = e.target.innerHTML;

        switch (compute) {


            case "+":

                if ((resultScreen.innerHTML !== "") && (typeof firstOperand === "number") && (typeof secondOperand === "number")) {

                    total = firstOperand + secondOperand;
                    resultScreen.innerHTML = total;
                    firstOperand = total;
                    secondOperand = 0;

                } else if (resultScreen.innerHTML !== "") {

                    firstOperand = Number(resultScreen.innerHTML);
                }



                case "=":

                    total = firstOperand + secondOperand;
                    resultScreen.innerHTML = total;
        }
    })
});