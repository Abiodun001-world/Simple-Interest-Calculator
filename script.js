//function showMessage() {
//	document.getElementById("result").style.display = "block";
//};
// making the compute interest responsive
function compute() {
	const principal = document.getElementById("principal").value;
	if(parseInt(principal) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}

     // assigning rate, years and ptincipal to a value
	const rate = document.getElementById("rate").value;
	const years = document.getElementById("years").value;

	const interest = principal * years * rate / 100;

	const today = new Date();
	const yearOfWithdrawal = parseInt(today.getFullYear())+parseInt(years);
// showing the message of principal,rate,interest and year of withdrawal
	document.getElementById("renderoutput").innerHTML = ""+principal;
	document.getElementById("interestoutput").innerHTML = ""+rate;
	document.getElementById("amountoutput").innerHTML = ""+interest;
	document.getElementById("yearoutput").innerHTML = ""+yearOfWithdrawal;
	showMessage();

	return false;
};

function showRange() {
	const rate = document.getElementById("rate").value;
	document.getElementById("ratevalue").innerHTML = rate;
}












        