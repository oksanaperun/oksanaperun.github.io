var searchHelpElement = $('#searchHelp'),
	pickUpHelpElement = $('#pickUpHelp'),
	modalBodyElement = $('.modal-body');

searchHelpElement.click(function () {
	var description = '';

	description = '<p>Пошук слів за заданою маскою (зразком) дозволяє Вам:</p>';
	description += '<ul>';
	description += '<li>знайти слова певної довжини з відомими або невідомими літерами</li>';
	description += '<li>знайти всі слова із заданим початком і/або закінченням</li>';
	description += '<li>скласти або розгадати кросворд чи сканворд</li>';
	description += '<li>знайти слово, у написанні якого Ви не впевнені</li>';
	description += '</ul>';
	description += '<p>Для задання маски використовуйте наступні символи:</p>';
	description += '<ul>';
	description += '<li>* (зірочка) - замінює будь-яку послідовність літер, в тому числі пусту</li>';
	description += '<li>. (крапка) - замінює будь-яку літеру</li>';
	description += '</ul>';
	description += '<p>Для виконання пошуку:</p>';
	description += '<ul>';
	description += '<li>введіть в поле введення маску з використанням символів "*" і/або "."</li>';
	description += '<li>натисність кнопку "Знайти слова за маскою" або клавішу Enter</li>';
	description += '<li>якщо біля знайденого слова відображається іконка <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>, то, натиснувши на неї, Ви побачите тлумачення слова</li>';
	description += '<li>результати пошуку підвантажуються послідовно по ' + maxNumber + ' слів після натискання на кнопку "Показати наступні"</li>';
	description += '<li>результати пошуку можна сортувати за алфавітом або довжиною слова</li>';
	description += '</ul>';
	description += '<p>Пошук слів за маскою виконується у словнику іменників української мови.</p>';
	
	modalBodyElement.empty();
	modalBodyElement.append(description);
});

pickUpHelpElement.click(function () {
	var description = '';
	
	description = '<p>Підбір можливих слів використовується для складання слів зі слова й допоможе Вам поповнити словниковий запас, а також набрати більшу кількість балів у відповідних іграх.</p>';
	description += '<p>Для виконання підбору:</p>';
	description += '<ul>';
	description += '<li>введіть слово в поле введення</li>';
	description += '<li>натисність кнопку "Підібрати можливі слова" або комбінацію клавіш Shift+Enter</li>';
	description += '<li>якщо біля знайденого слова відображається іконка <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>, то, натиснувши на неї, Ви побачите тлумачення слова</li>';
	description += '<li>результати підбору підвантажуються послідовно по ' + maxNumber + ' слів після натискання на кнопку "Показати наступні"</li>';
	description += '<li>результати підбору можна сортувати за алфавітом або довжиною слова</li>';
	description += '</ul>';
	description += '<p>Підбір слів виконується у словнику іменників української мови.</p>';
	
	modalBodyElement.empty();
	modalBodyElement.append(description);
});