var filterField = document.querySelector("#table-filter");

filterField.addEventListener("input", function(){
	var patients = document.querySelectorAll(".patient");

	if (this.value.length > 0){
		for ( var i = 0; i < patients.length ; i++) {
			var patient = patients[i];
			var tdName = patient.querySelector(".info-name");
			var name = tdName.textContent;
			var regex = new RegExp(this.value, "i");
			if ( !regex.test(name) ){
				patient.classList.add("hide");
			} else {
				patient.classList.remove("hide");
			}
		}
	} else {
		for (var i=0; i < patients.length ; i++) {
			var patient = patients[i];
			patient.classList.remove("hide");
		}
	}
});