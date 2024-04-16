const button = document.getElementById('convert-button')
const inputReal = document.getElementById('input-real')
const realValueText = document.getElementById('real-value-text')
const inputDolar = document.getElementById('dolar-value-text')
const select = document.getElementById('currency-select')
const currencyName = document.getElementById('currency-name')
const currencyImage = document.getElementById('currency-image')


const convertValues = async () => {
  
  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then((Response) => Response.json())
  const Dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  
  realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputReal.value)

  if (select.value === 'US$ Dólar americano') {
    inputDolar.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputReal.value / Dolar)
  } else if (select.value === '€ Euro') {
    inputDolar.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputReal.value / euro)
  } else {
    inputDolar.innerHTML = (inputReal.value / bitcoin).toFixed(4)
    if (inputReal.value <= 3) {
      inputDolar.innerHTML = (inputReal.value / bitcoin).toFixed(7)
    }
    if (inputReal.value >= 4 && inputReal.value <= 35) {
      inputDolar.innerHTML = (inputReal.value / bitcoin).toFixed(6)
    }
    if (inputReal.value >= 36 && inputReal.value <= 356) {
      inputDolar.innerHTML = (inputReal.value / bitcoin).toFixed(5)
    }
    if (inputReal.value >= 357 && inputReal.value <= 3567) {
      inputDolar.innerHTML = (inputReal.value / bitcoin).toFixed(4)
    }
    if (inputReal.value >= 3568 && inputReal.value <= 35676) {
      inputDolar.innerHTML = (inputReal.value / bitcoin).toFixed(3)
    }
    if (inputReal.value >= 35677) {
      inputDolar.innerHTML = (inputReal.value / bitcoin).toFixed(2)
    }
  }
}
changeCurrency = () => {
  if (select.value === 'US$ Dólar americano') {
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/estados-unidos (1) 1.svg'
  } else if (select.value === '€ Euro') {
    currencyName.innerHTML = 'Euro'
    currencyImage.src = './assets/euro-image.svg'
  } else if (select.value === 'Bitcoin') {
    currencyName.innerHTML = 'Bitcoin'
    currencyImage.src = './assets/bitcoin-image.png'
  }
  convertValues()
}



button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
