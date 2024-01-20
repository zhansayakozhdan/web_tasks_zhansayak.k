document.getElementById('amountInput').addEventListener('input', updateConvertedAmount);
document.getElementById('currencySelector').addEventListener('change', updateConvertedAmount);

function updateConvertedAmount() {
    const amount = parseFloat(document.getElementById('amountInput').value) || 0;
    const currencySelector = document.getElementById('currencySelector');
    const selectedCurrency = currencySelector.value;

    const exchangeRates = {
        USD: { KZT: 420, EUR: 0.85 },
        KZT: { USD: 0.0024, EUR: 0.002 },
        EUR: { USD: 1.18, KZT: 500 }
    };

    const convertedUSD = selectedCurrency === 'USD' ? -amount : amount * exchangeRates[selectedCurrency]['USD'];
    const convertedKZT = amount * exchangeRates[selectedCurrency]['KZT'];
    const convertedEUR = amount * exchangeRates[selectedCurrency]['EUR'];

    document.getElementById('convertedUSD').textContent = convertedUSD.toFixed(2);
    document.getElementById('convertedKZT').textContent = convertedKZT.toFixed(2);
    document.getElementById('convertedEUR').textContent = convertedEUR.toFixed(2);
}

// Добавляем обработчик события для изменения валюты
document.getElementById('currencySelector').addEventListener('change', updateConvertedAmount);

// Добавляем обработчик события для ввода суммы
document.getElementById('amountInput').addEventListener('input', updateConvertedAmount);