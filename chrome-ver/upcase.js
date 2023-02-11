document.addEventListener('DOMContentLoaded', waitClick)

function	waitClick()
{
	document.querySelector('#btn').addEventListener('click', getText)
}

function	getText()
{
	let text = document.querySelector('#text').value;
	document.querySelector("#result").innerHTML = upper(text) + '<br>';
}

function	upper(text)
{
	return text.toUpperCase();
}
