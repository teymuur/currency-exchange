const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
$(document).ready(function () {
    $('select').selectize({
        sortField: 'text'
    });
});
function getExchangeRate() {


    const apiKey = '207fad7e204d8eb308f3633f';
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
  const currencies = [
    'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD',
    'NOK', 'MXN', 'SGD', 'HKD', 'KRW', 'TRY', 'INR', 'BRL', 'ZAR', 'RUB',
    'DZD', 'ARS', 'BHD', 'BDT', 'BGN', 'CAD', 'CLP', 'COP', 'CRC', 'CZK',
    'DKK', 'EGP', 'HUF', 'IDR', 'ILS', 'INR', 'KWD', 'LKR', 'MAD', 'MYR',
    'NGN', 'NPR', 'PEN', 'PHP', 'PKR', 'PLN', 'QAR', 'RON', 'SAR', 'THB',
    'TWD', 'UAH', 'VND'
  ];
  addCurrencyOptions(currencies);
  
  $(document).ready(function () {
    $('select').selectize({
        sortField: 'text'
    });

    $('#fromCurrency, #toCurrency, #amount').on('change input', getExchangeRate);

  
});  
function reverseC() {
  // Swap values of fromCurrency and toCurrency
  let temp = $('fromCurrency').val();
  console.log(temp);
  $('fromCurrency').val($('toCurrency').val());
  $('toCurrency').val(temp);
  // Trigger the getExchangeRate function to update the result

 getExchangeRate();
};


    toCurrency.value = "USD"