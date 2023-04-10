var addButton = document.querySelector("#add-patient");

addButton.addEventListener("click", function(){
	event.preventDefault();
	var form = document.querySelector("#form-add");
	var patient = getPatient(form);
	var patientTr = makeTr(patient);

	// Prints patient data to table
	var patientTable = document.querySelector("#patientTable");
	patientTable.appendChild(patientTr);

});


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
	patientTr.appendChild(makeTd(patient.weight,"info-bmi"));

	return patientTr;
}

function makeTd(data,Class){ // adds patient data to patient row
	var td = document.createElement("td");
	td.textContent = data;
	td.classList.add(Class);
	return td;
}