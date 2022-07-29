const display = document.querySelector(".display");
const buttons = Array.from(document.getElementsByTagName("button"));

buttons.map((button) => {
	button.addEventListener("click", (event) => {
		switch (event.target.innerText) {
			case "C":
				display.innerText = "";
				break;
			case "=":
				try {
					display.innerText = eval(display.innerText);
				} catch {
					display.innerText = "Error";
				}
				break;
			default:
				display.innerText += event.target.innerText;
				return;
		}
	});
});
