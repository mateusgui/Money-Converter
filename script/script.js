const convertButton = document.querySelector(".convert-button")
const selector = document.querySelector(".currency-selector")

function convertValues() {
    const input = document.querySelector(".input-value").value
    const htmlValueToConvert = document.querySelector(".from-quantity")
    const htmlValueConverted = document.querySelector(".to-quantity")

    const dolarToday = 5.2
    const euroToday = 6.2

    if(selector.value == "USD") {
        htmlValueConverted.innerHTML = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(input / dolarToday)
    }
    if(selector.value == "EUR") {
        htmlValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input / euroToday)
    }

    htmlValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)
}

convertButton.addEventListener("click", convertValues)