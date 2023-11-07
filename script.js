let currentResult = '';
const historyList = document.getElementById('history');
const maxInputLength = 12; // Maksymalna długość liczby

function appendToResult(value) {
    if (currentResult.length < maxInputLength) {
        currentResult += value;
        document.getElementById('result').textContent = currentResult;
    }
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').textContent = '0';
}

function calculateResult() {
    try {
        const result = eval(currentResult);
        document.getElementById('result').textContent = result;
        addToHistory(currentResult, result);
        currentResult = result.toString();
    } catch (error) {
        document.getElementById('result').textContent = 'Błąd';
        currentResult = '';
    }
}

function addToHistory(expression, result) {
    const listItem = document.createElement('li');
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);
}

function clearHistory() {
    historyList.innerHTML = ''; // Wyczyść zawartość historii
}