let buttonNumber = document.querySelectorAll(".button.number");
let resultScreen = document.querySelector(".display");
let clear = document.querySelector(".ac");
let negative = document.querySelector(".pm");
let percentage = document.querySelector(".percent");
let operators = document.querySelectorAll(".operator");
let operatorler = document.getElementsByClassName("operator");

buttonNumber.forEach(item => {

    item.addEventListener("click", function (e) {

        if ((resultScreen.innerHTML == "0") && (e.target.innerHTML == "0")) {
            resultScreen.innerHTML += "";
        } 
        
        else if ((resultScreen.innerHTML.length != 0) && ((typeof resultScreen.innerHTML) === "number")) {

            // let operand = resultScreen.innerHTML;
            console.log(resultScreen.innerHTML);
            resultScreen.innerHTML = "";
            resultScreen.innerHTML += e.target.innerHTML;


        } else if ((resultScreen.innerHTML.length != 0) && (e.target.innerHTML != "0")) {

            if (resultScreen.innerHTML[0] == "0") resultScreen.innerHTML = "";

            resultScreen.innerHTML += e.target.innerHTML;
        }



    });

});

clear.addEventListener("click", () => {

    resultScreen.innerHTML = "0";
    operators.forEach(item => {
        item.style.backgroundColor = "#f1a33c";
        item.style.color = "white";

    });

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

        if (item.className == "button operator plus") {

            if (e.target.style.backgroundColor = "#f1a33c") {

                e.target.style.backgroundColor = "white";
                e.target.style.color = "#f1a33c";

            } else if (e.target.style.backgroundColor = "white") {

                e.target.style.backgroundColor = "#f1a33c";
                e.target.style.color = "white";

            }

            let operand= Number(resultScreen.innerHTML);
            resultScreen.innerHTML = operand;
            console.log(typeof operand);



            // -----------------------------









        } else if (item.className == "button operator minus") {

            if (e.target.style.backgroundColor = "#f1a33c") {

                e.target.style.backgroundColor = "white";
                e.target.style.color = "#f1a33c";

            } else if (e.target.style.backgroundColor = "white") {

                e.target.style.backgroundColor = "#f1a33c";
                e.target.style.color = "white";

            }
        }




    })
})

// let x = 21;

// console.log((typeof x) == "number");