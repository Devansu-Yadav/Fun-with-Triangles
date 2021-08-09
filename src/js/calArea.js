const base = document.querySelector("#base-side");
const height = document.querySelector("#height-side");
const submit = document.querySelector("#submit-btn");
const output = document.querySelector(".output");

function findHypotenuse() {
    showOutput();
    const baseSide = base.value;
    const heightSide = height.value;

    if(baseSide === "" || heightSide === "") {
        output.innerText = "Enter both the sides to find Area!!";
    } else if(Number(baseSide) > 0 && Number(heightSide) > 0) {
        calculateArea(Number(baseSide), Number(heightSide));
    } else {
        output.innerText = "Please Enter valid values for length of sides!!";
    }
}

function showOutput() {
    output.style.display = "block";
}

function calculateArea(baseOfTriangle, heightOfTriangle) {
    const area = 0.5 * baseOfTriangle * heightOfTriangle;
    output.innerHTML = "<span> Area= " + area + " cm <sup>2</sup></span>";
} 

submit.addEventListener("click", findHypotenuse);