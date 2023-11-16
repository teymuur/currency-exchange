const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');

function getExchangeRate() {


    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency.value}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[toCurrency];
        const result = amount * rate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} is ${result.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }

fromCurrency.addEventListener("input",getExchangeRate)
amount.addEventListener("input",getExchangeRate)
toCurrency.addEventListener("input",getExchangeRate)