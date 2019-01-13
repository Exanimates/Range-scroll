var targetValue = document.getElementsByClassName("target__value_number")[0];

var needMoney = document.getElementsByClassName("need_money_value")[0];


for (input of document.querySelectorAll("input[type=range]")) {
	actualizeInput(input)
}


document.addEventListener("input", function (evt) {
	var input = evt.target;
	actualizeInput(input)
});

function actualizeInput(input) {
	var inputMin = input.getAttribute("min");
	var inputMax = input.getAttribute("max");

	width = $(input).width();

	newPoint = ($(input).val() - $(input).attr("min")) / ($(input).attr("max") - $(input).attr("min"));

	offset = -182;

	if (newPoint < 0) { newPlace = 0; }
	else if (newPoint > 1) { newPlace = width; }
	else { newPlace = width * newPoint + offset - $(input).val(); offset -= newPoint; }

	$(".output_value")
		.css({
			left: newPlace,
		})
		.text("$" + $(input).val());

	needMoney.innerHTML = targetValue.innerHTML - input.value;
	var unidad = (inputMax - inputMin) / 100;
	input.style.setProperty("--value", (input.value - inputMin) / unidad);
}