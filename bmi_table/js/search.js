var searchButton = document.querySelector("#search-patient");

searchButton.addEventListener("click", function(){
	console.log("Buscando paciente")
	
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://raw.githubusercontent.com/thaiantunes/learningJS/main/bmi_table/patients.json");

	xhr.addEventListener("load", function(){
		var ajaxError = document.querySelector("#ajax-error");

		if(xhr.status == 200){
			var response = xhr.responseText;
			var patients = JSON.parse(response);
			patients.forEach(function(patient){
				addPatientToTable(patient);
			});
		} else {
			console.log(xhr.status);
			console.log(xhr.responseText);
			ajaxError.classList.remove("hide")
		}
	});

	xhr.send();

})