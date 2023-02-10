document.addEventListener('DOMContentLoaded',

	function()
	{
		document.querySelector('#btn').addEventListener('click', function()
		{
			let text = document.querySelector('#text').value;
			document.querySelector("#result").innerHTML = upper(text);
		}
		)
		function	upper(text)
		{
			return text.toUpperCase();
		}
	}
)