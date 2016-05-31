
$(function(){
	//объект теста
	const info = [
	{
		question: '1. Вопрос №1',
		answer: ['Вариант ответа 1.1', 'Вариант ответа 1.2', 'Вариант ответа 1.3'],
		checked: ['false', 'true', 'false'],
		name: 'optionsRadios1'
	},
	{
		question: '2. Вопрос №2',
		answer: ['Вариант ответа 2.1', 'Вариант ответа 2.2', 'Вариант ответа 2.3'],
		checked: ['true', 'false', 'false'],
		name: 'optionsRadios2'
	},
	{
		question: '3. Вопрос №3',
		answer: ['Вариант ответа 3.1', 'Вариант ответа 3.2', 'Вариант ответа 3.3'],
		checked: ['false', 'true', 'false'],
		name: 'optionsRadios3'
	}];

	localStorage.setItem('infoLocal' , JSON.stringify(info)); //записываем в localStorage
	let infoStr= localStorage.getItem('infoLocal');//получаем из localStorage
	let infoObj=JSON.parse(infoStr);//получаем из строки объект

	//выводим на страницу
	let test = $('#test').html();
	let content = tmpl(test, {data: infoObj});
	$('form').append(content);

	//по клику проверяем ответы на кнопку и выводим модальное окно
	$('.btn-lg').on('click', function() { 
		$('.answer').each(function() {
			if ($(this).prop('checked') == ($(this).attr('value') == 'true')){
				$('.modal-window').css("display", "block");  
				$('.modal-background').css("display", "block");     	
			}else{
				$('.modal-window_text').text('Тест не сдан:( Попробуйте еще раз');
				$('.modal-window').css("display", "block");  
				$('.modal-background').css("display", "block");
				return false; 
			}
		});
	});

	//по клику перезагружаем окно
	$('.modal-window_btn').on('click', function(){
		window.location.reload();
	});
});