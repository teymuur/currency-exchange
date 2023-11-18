const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');

function getExchangeRate() {


    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency.value}?apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[toCurrency.value];
        const result = amount.value * rate;
        document.getElementById('result').innerText = `${amount.value} ${fromCurrency.value} is ${result.toFixed(2)} ${toCurrency.value}`;
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }

  function addCurrencyOptions(currencyCodes) {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    // Loop through the array of currency codes
    currencyCodes.forEach(currencyCode => {
      // Check if the option already exists
      if (!fromCurrencySelect.querySelector(`option[value="${currencyCode}"]`)) {
        // Create option element
        const option = document.createElement('option');
        option.value = currencyCode;
        option.text = currencyCode;

        // Add option to both select elements
        fromCurrencySelect.add(option.cloneNode(true));
        toCurrencySelect.add(option);
      }
    });
  }
  const currencies = ['CAD', 'INR', 'CNY', 'JPY', 'GBP', 'AUD'];
  addCurrencyOptions(currencies);
fromCurrency.addEventListener("input",getExchangeRate)
amount.addEventListener("input",getExchangeRate)
toCurrency.addEventListener("input",getExchangeRate)