var brush = "white";//Изначально кисть белая

$(document).ready(function () { //Когда страница прогружена

    $('.t2 td').on('click',function () { //Вешаем событие клиека на каждую ячейку таблицы с цветами
        brush = $(this).data('color');//Красим кисть
    });

    $('.t1 td').on('mousedown',function () { //Событие на клик по ячейке для рисования
        $(this).css('background-color',brush);
    });

    $('.t1 td').on('mouseover',function (e) { //Событие на наведение зажатой мыши
        if(e.which===1) $(this).css('background-color',brush);
    });
});