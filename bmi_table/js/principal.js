var topTitle = document.querySelector(".topTitle");
topTitle.textContent = "BMI Table";

var patient = document.querySelector("#first-patient");
var tdWeight = patient.querySelector(".info-weight");
var tdHeight = patient.querySelector(".info-height");
var tdBmi = patient.querySelector(".info-bmi")


var weight = tdWeight.textContent;
var height = tdHeight.textContent;

var weightOK = true;
var heightOK = true;

if(weight < 0 || weight > 1000) {
	console.log("Wrong weight!")
	weightOK = false;
	tdBmi.textContent = "Wrong weight!"
}

if(height < 0 || height > 3.00){
	console.log("Wrong height!")
	heightOK = false;
	tdBmi.textContent = "Wrong height!"
}

if (weightOK && heightOK){
	tdBmi.textContent = weight / (height * height);
}