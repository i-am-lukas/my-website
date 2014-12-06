window.onload = main;

function main()
{
	document.getElementById("btnAlert").onclick = alertInput;
}

function alertInput()
{
	
	var input = document.getElementById("textAreaAlert").value;
	var toAlert = createLI(input);
	var navigation = document.getElementById("unorderedList");
	navigation.innerHTML=toAlert;
}

function createLI(userInput)
{
	return "<li>"+userInput+"</li>";
}