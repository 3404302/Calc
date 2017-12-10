$(document).ready(function () { // Ждём загрузки страницы	   
	$("input[name=send]").click(function () { // Событие нажатия на кнопку "Расчёт"
		var first = +document.getElementById('first').value, // Переменная первого числа
            second = +document.getElementById('second').value, // Переменная второго числа
            result1 = first * second; // Переменная результата
        document.getElementById('result').innerHTML = result1;
        //var action = $("select[name=action]").val(); // Получаем значение действия, которое нужно выполнить
        //result1 = first * second;
		//if (action == '+') { // Если действие - сложение
		//	result = first + second; //  складываем
		//}
		//else if (action == '-'){ // Если действие вычитание
		//	result = first - second; // вычитаем
		//}
		//else if (action == '*'){ // Если действие умножение
		//	result = first * second; // умножаем
		//}
		//else if (action == '/'){ // Если действие деления
		//	result = first / second; // делим
		//}
        //if (action == '*'){ // Если действие умножение
		//result = first * second; // умножаем
        //}
		//$("input[name=result]").val(result1); // записываем результат
        //..document.getElementById('result').value=first * second;
        //document.getElementById('summ').value = result1;
	});
});