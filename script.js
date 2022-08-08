//function showMessage() {
//	document.getElementById("result").style.display = "block";
//};
// making the compute interest responsive
function compute() {
	var principal = document.getElementById("principal").value;
	if(parseInt(principal) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}

     // assigning rate, years and ptincipal to a value
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate / 100;

	var today = new Date();
	var yearOfWithdrawal = parseInt(today.getFullYear())+parseInt(years);
// showing the message of principal,rate,interest and year of withdrawal
	document.getElementById("renderoutput").innerHTML = ""+principal;
	document.getElementById("interestoutput").innerHTML = ""+rate;
	document.getElementById("amountoutput").innerHTML = ""+interest;
	document.getElementById("yearoutput").innerHTML = ""+yearOfWithdrawal;
	showMessage();

	return false;
};

function showRange() {
	var rate = document.getElementById("rate").value;
	document.getElementById("ratevalue").innerHTML = rate;
}












        