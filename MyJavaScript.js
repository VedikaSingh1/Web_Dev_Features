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