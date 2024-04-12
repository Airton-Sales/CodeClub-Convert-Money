const button = document.getElementById('convert-button')
const inputReal = document.getElementById('input-real')
const realValueText = document.getElementById('real-value-text')
const inputDolar = document.getElementById("dolar-value-text");
const select = document.getElementById("currency-select");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.getElementById("currency-image");


const Dolar = 5.2;

const convertValues = () => {
    // realValueText.innerHTML = inputReal.value
    // inputDolar.innerHTML = (inputReal.value / dólar).toFixed(2);
    
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReal.value)

    inputDolar.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputReal.value / Dolar)
};
changeCurrency = () => {
  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/estados-unidos (1) 1.svg";
  } else {
    currencyName.innerHTML = select.value;
    currencyImage.src = "./assets/Design sem nome 1.svg";
  }
}

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);