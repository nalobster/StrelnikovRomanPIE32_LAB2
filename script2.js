document.getElementById('calculateButton2').addEventListener('click', calculateMinutes);

function calculateMinutes() {
    const secondsInput = document.getElementById('seconds').value;
    const seconds = parseInt(secondsInput, 10);

    if (isNaN(seconds) || seconds < 0) {
        document.getElementById('result2').innerText = 'Пожалуйста, введите корректное неотрицательное целое число.';
        return;
    }

    const minutes = Math.floor(seconds / 60);
    document.getElementById('result2').innerText = `Количество полных минут: ${minutes}`;
}
