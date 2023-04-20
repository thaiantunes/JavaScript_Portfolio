var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function(){
	event.preventDefault();
	var form = document.querySelector("#form-add");
	var patient = getPatient(form);

	var errors = checkPatient(patient);
	if(errors.length > 0){
		showErrorMsg(errors);
		return;
	}

	addPatientToTable(patient);
	form.reset();

	var errosMsgs = document.querySelector("#errorMsgs");
	errorMsgs.innerHTML = "";

});

function addPatientToTable(patient){
	var patientTr = makeTr(patient);
	var patientTable = document.querySelector("#patientTable");
	patientTable.appendChild(patientTr);
}

function showErrorMsg(errors){
	var ul =  document.querySelector("#errorMsgs");
	ul.innerHTML = ""
	errors.forEach(function(error){
		var li = document.createElement("li");
		li.textContent = error;
		ul.appendChild(li);
	});
}


function getPatient(form) { // Gets patient data from form
	var patient = {
		name: form.name.value,
		weight: form.weight.value,
		height: form.height.value,
		fat: form.fat.value,
		bmi: calculateBmi(form.weight.value, form.height.value) // calculate patient's bmi
	}

	return patient;
}

function makeTr(patient) { // creates patient data row
	var patientTr = document.createElement("tr");
	patientTr.classList.add("patient");

	patientTr.appendChild(makeTd(patient.name,"info-name"));
	patientTr.appendChild(makeTd(patient.weight,"info-weight"));
	patientTr.appendChild(makeTd(patient.height,"info-height"));
	patientTr.appendChild(makeTd(patient.fat,"info-fat"));
	patientTr.appendChild(makeTd(patient.bmi,"info-bmi"));

	return patientTr;
}

function makeTd(data,Class){ // adds patient data to patient row
	var td = document.createElement("td");
	td.textContent = data;
	td.classList.add(Class);
	return td;
}

function checkPatient(patient) {
	var errors = [];
	if (patient.name.length == 0) errors.push("Please enter patient name")
	if (patient.weight.length == 0) errors.push("Please enter patient weight")
	if (patient.height.length == 0) errors.push("Please enter patient height")
	if (patient.fat.length == 0) errors.push("Please enter patient body fat percentage")
	if (!checkWeight(patient.weight)) errors.push("Invalid Weight");
	if(!checkHeight(patient.height)) errors.push("Invalid Height");
	return errors;
}