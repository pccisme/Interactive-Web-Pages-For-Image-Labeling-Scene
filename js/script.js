form.onsubmit = function(e) {
	e.preventDefault();
	

	var checks = form.elements["checkBox"];
	var num_checks = checks.length;
	var count = 0;
	for (var pos=0; pos < num_checks; pos++) {
		var isChecked = checks[pos].checked == true;
		if (isChecked) {
			checkRes = checks[pos].value;
			console.log(checkRes);
		}
		else {
			count ++;
		}
	}
	if (count === num_checks) {
		console.log("User submitted the HIT but did not select any image.");
		alert("You DID NOT select any image!");
		
	}
}