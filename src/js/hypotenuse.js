const side_1 = document.querySelector("#side-1");
const side_2 = document.querySelector("#side-2");
const submit = document.querySelector("#submit-btn");
const output = document.querySelector(".output");

function findHypotenuse() {
    const firstSide = side_1.value;
    const secondSide = side_2.value;

    if(firstSide === "" || secondSide === "") {
        output.innerText = "Enter both the side to find hypotenuse!!";
    } else if(Number(firstSide) > 0 && Number(secondSide) > 0) {
        calculateHypotenuse(Number(firstSide), Number(secondSide));
    } else {
        output.innerText = "Please Enter valid values for length of sides!!";
    }
}

function calculateHypotenuse(firstSide, secondSide) {
    const thirdSide = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));
    output.innerText = "C= " + thirdSide;
} 

submit.addEventListener("click", findHypotenuse);