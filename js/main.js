$(document).ready(function () {//функция, которая проверяет, готов ли наш сайт к манипуляциям (документ), jqdoc+tab

    var currentFloor = 2; // переменная, где хранится текущий этаж
    var floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
    var counterUp = $('.counter-up'); //стрелка вверх, кнопка увеличения этажа - нашли кнопку с помощью jquery и записали в переменную
    var counterDown = $('.counter-down'); // кнопка уменьшения этажа

    // надо узнать на какой текущий этаж нажали .on('click'), получить номер этого этажа, этот атрибут. Сначала находим сам этот path, а затем с помощью this и номер этажа. Сохраним это в переменную currentFloor. Далее можно не при клике указать, а при наведении, функция .on('mouseover')
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        // далее запишем этот currentFloor в счётчик
        $('.counter').text(currentFloor);
    });

    //менять значение счётчика при нажатии на стрелки и подсвечивать текущий этаж. Отследим клик по стрелке вверх
    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++; // увеличим значение currentFloor ... 

            //отформатируем currentFloor, чтобы перед цифрой ставился 0, с помощью ф-ии toLocaleString()
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });

            //...и ниже запишем в текстовый блок
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');//добавляем класс current-floor на выбранный path. Подсвечиваем текущий этаж
        }

    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
});


