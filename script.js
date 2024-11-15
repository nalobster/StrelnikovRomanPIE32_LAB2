document.getElementById('calculateButton').addEventListener('click', calculate);

function calculate() {
    // Получаем значения координат из полей ввода
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    // Проверяем, что введены все значения
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        document.getElementById('result').innerText = "Пожалуйста, введите корректные координаты.";
        return;
    }

    // Вычисляем длины сторон
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);

    // Вычисляем периметр и площадь
    const perimeter = 2 * (width + height);
    const area = width * height;

    // Выводим результаты
    document.getElementById('result').innerText = `Периметр: ${perimeter}, Площадь: ${area}`;
}
