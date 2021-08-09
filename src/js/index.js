const angle_1 = document.querySelector("#angle-1");
const angle_2 = document.querySelector("#angle-2");
const angle_3 = document.querySelector("#angle-3");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector(".output");


function checkValidTriangle() {
    showOutput();
    const firstAngle = angle_1.value;
    const secondAngle = angle_2.value;
    const thirdAngle = angle_3.value;

    if(firstAngle === "" || secondAngle === "" || thirdAngle === "") {
        output.innerText = "Please enter all the Angles!!";
    } else if(Number(firstAngle) > 0 && Number(secondAngle) > 0 && Number(thirdAngle) > 0) {
        checkValidTriangleOrNot(Number(firstAngle), Number(secondAngle), Number(thirdAngle));
    } else {
        output.innerText = "Enter valid values of all the angles!!";
    }
}

function checkValidTriangleOrNot(angleOne, angleTwo, angleThree) {
    if(angleOne + angleTwo + angleThree == 180) {
        output.innerText = "Wohoo! These angles make a Triangle!";
    } else {
        output.innerText = "Nope!! These angles don't make a Triangle😅";
    }
}

function showOutput() {
    output.style.display = "block";
}

submitBtn.addEventListener("click", checkValidTriangle);