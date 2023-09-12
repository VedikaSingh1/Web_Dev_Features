function validateFirstName(){//test input for 2-15 characters allowed
	var fName=document.getElementById("firstName").value;
	var re1=/^[a-zA-Z\s\'\-]{2,15}$/;

	if (re1.test(fName)){//if input is valid,update page to show successful entry
		document.getElementById("firstNamePrompt").style.color="Green";
		document.getElementById("firstNamePrompt").innerHTML="<strong>Valid</strong>";
		return true;
	}
	else{//if input is invalid,update page to prompt for new input
		document.getElementById("firstNamePrompt").style.color="Red";
		document.getElementById("firstNamePrompt").innerHTML="<strong>Enter 2-15 characters</strong>";
		return false;
	}
}

function validateLastName(){//test input for 2-25 characters allowed
	var lName=document.getElementById("lastName").value;
	var re2=/^[a-z A-Z\s\'\-]{2,25}$/;

	if (re2.test(lName)){//if input is valid,update page to show successful entry
		document.getElementById("lastNamePrompt").style.color="green";
		document.getElementById("lastNamePrompt").innerHTML="<strong>Valid</strong>"
		return true;
	}
	else{//if input is invalid,update page to prompt for new input
	document.getElementById("lastNamePrompt").style.color="Red";
	document.getElementById("lastNamePrompt").innerHTML="<strong>Enter 2-15 characters</strong>"
	return false;
	}
}

function displayInput(){
	var testInput=document.getElementById("name").value;
	if (testInput.length==0){
		document.getElementById("para").innerHTML="Hey !"
		return true
	}
	else{
		document.getElementById("para").innerHTML=testInput;
		return false
	}
}