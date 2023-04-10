var topTitle = document.querySelector(".topTitle");
topTitle.textContent = "BMI Table";

var patients = document.querySelectorAll(".patient");

for(var i=0; i < patients.length; i++){

	var patient = patients[i]

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
		patient.classList.add("invalid-patient")
	}

	if(height < 0 || height > 3.00){
		console.log("Wrong height!")
		heightOK = false;
		tdBmi.textContent = "Wrong height!"
		patient.classList.add("invalid-patient")
	}

	if (weightOK && heightOK){
		tdBmi.textContent = (weight / (height * height)).toFixed(2);
	}
} 

var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function(){
	event.preventDefault();
	var form = document.querySelector("#form-add");
	// var name = form.name.value;
	// var weight = form.weight.value;
	// var height = form.height.value;
	// var fat = form.fat.value;

	var patientTr = document.createElement("tr");
	var nameTd = document.createElement("td");
	var weightTd = document.createElement("td");
	var heightTd = document.createElement("td");
	var fatTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nameTd.textContent = form.name.value;
	weightTd.textContent = form.weight.value;
	heightTd.textContent = form.height.value;
	fatTd.textContent = form.fat.value;

	patientTr.appendChild(nameTd);
	patientTr.appendChild(weightTd);
	patientTr.appendChild(heightTd);
	patientTr.appendChild(fatTd);

	var patientTable = document.querySelector("#patientTable");
	patientTable.appendChild(patientTr);

});