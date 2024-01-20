



function updateConvertedAmount() {
    const amount = parseFloat(document.getElementById('amountInput').value) || 0;
    const currencySelector = document.getElementById('currencySelector');
    const selectedCurrency = currencySelector.value;

    const exchangeRates = {
        USD: { KZT: 452, EUR: 0.92, TRY: 0.067 },
        KZT: { USD: 0.0022, EUR: 0.002, TRY: 30.15 },
        EUR: { USD: 1.09, KZT: 492.85, TRY: 32.81 }, 
        TRY: { KZT: 14.98, USD: 0.033, EUR: 0.030 }
    };

    const convertedUSD = amount * exchangeRates[selectedCurrency]['USD'];
    const convertedKZT = amount * exchangeRates[selectedCurrency]['KZT'];
    const convertedEUR = amount * exchangeRates[selectedCurrency]['EUR'];
    const convertedTRY = amount * exchangeRates[selectedCurrency]['TRY'];

    if(currencySelector === 'USD') {
        convertedUSD = '-';
    }
    if(currencySelector === 'KZT'){
        convertedKZT = '-';
    }

    
    document.getElementById('convertedUSD').value = convertedUSD.toFixed(2);
    document.getElementById('convertedKZT').value = convertedKZT.toFixed(2);
    document.getElementById('convertedEUR').value = convertedEUR.toFixed(2);
    document.getElementById('convertedTRY').value = convertedTRY.toFixed(2);
}

document.getElementById('currencySelector').addEventListener('change', updateConvertedAmount);

document.getElementById('amountInput').addEventListener('input', updateConvertedAmount);