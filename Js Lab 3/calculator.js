// Get number buttons
var number = document.getElementsByClassName("number");
// Get operatior buttons
var operator = document.getElementsByClassName("operator");
// *********************************************************
// loop to add click event for all number buttons
// *********************************************************
for(var i =0;i<number.length;i++)
{
	number[i].addEventListener("click",NumberHandler)
}
// **********************************************************
// loop to add click event for all operator buttons
// *********************************************************
for(var i =0;i<operator.length;i++)
{
	operator[i].addEventListener("click",OperatorHandler);
}
// **********************************************************
// function about what happens when click a number button
// *********************************************************
function NumberHandler()
{
	var output = getOutput();
	if(output != NaN)
	{ 
		output = output + this.id;
		printOutput(output);
	}
}
// **********************************************************
// when click an operator button
// *********************************************************
function OperatorHandler()
{
	if(this.id == "clear")
	{
		printHistory("");
		printOutput("");
	}
	else if(this.id == "backspace"){
		var output = getOutput().toString();
		if(output)
		{
			output= output.substr(0,output.length-1);
			printOutput(output);
		}
	}
	else
	{
		var output = getOutput();
		var history = getHistory();
		history = history + output;
		if( this.id == "=") 
		{
			var result = eval(history);
			printOutput(result);
			printHistory("");
		}
		else if( this.id == "sqrt") 
		{
			var result = Math.sqrt(Number(history));
			printOutput(result);
			printHistory("");
		}
		else
		{
			history = history + this.id;
			printHistory(history);
			printOutput("");
		}
	}
}
// **********************************************************
// function to get the value exists from results before
// *********************************************************
function getHistory()
{
	return document.getElementById("history-value").innerText;
}
// **********************************************************
// print previous history
// *********************************************************
function printHistory(num)
{
	document.getElementById("history-value").innerText = num;
}
// **********************************************************
// function that return the output value
// *********************************************************
function getOutput()
{
	return document.getElementById("output-value").innerText;
}
// **********************************************************
// function that prints the output on screen
// *********************************************************
function printOutput(num)
{
	document.getElementById("output-value").innerText=num;
}