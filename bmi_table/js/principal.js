var topTitle = document.querySelector(".topTitle");
topTitle.textContent = "BMI Table";

var patients = document.querySelectorAll(".patient");

function calculateBmi(weight, height){
	var bmi = 0;
	bmi = weight / (height * height);

	return bmi.toFixed(2);
}

for(var i=0; i < patients.length; i++){

	var patient = patients[i]

	var tdWeight = patient.querySelector(".info-weight");
	var tdHeight = patient.querySelector(".info-height");
	var tdBmi = patient.querySelector(".info-bmi")


	var weight = tdWeight.textContent;
	var height = tdHeight.textContent;

	var weightOK = checkWeight(weight);
	var heightOK = checkHeight(height);

	if(!weightOK) {
		console.log("Wrong weight!")
		weightOK = false;
		tdBmi.textContent = "Wrong weight!"
		patient.classList.add("invalid-patient")
	}

	if(!heightOK){
		console.log("Wrong height!")
		heightOK = false;
		tdBmi.textContent = "Wrong height!"
		patient.classList.add("invalid-patient")
	}

	if (weightOK && heightOK){
		tdBmi.textContent = calculateBmi(weight, height);
	}
} 

function checkWeight(weight){

    if (weight >= 0 && weight <= 1000) {
        return true;
    } else {
        return false;
    }
}

function checkHeight(height) {

    if (height >= 0 && height <= 3.0) {
        return true;
    } else {
        return false;
    }
}