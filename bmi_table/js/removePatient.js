var patients = document.querySelectorAll(".patient");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut")
	setTimeout(function(){
		event.target.parentNode.remove();
	}, 400);
})

// patients.forEach(function(patient){
// 	patient.addEventListener("dblclick", function(){
// 		console.log("fui clicado")
// 		this.remove();
// 	});
// }) 