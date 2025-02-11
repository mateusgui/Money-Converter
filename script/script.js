const convertButton = document.querySelector(".convert-button")
const selector = document.querySelector(".currency-selector")
const currencySelector = document.querySelector(".currency-selector")
const currencyImage = document.querySelector(".convert-to")
const currencyText = document.querySelector(".to-type")

const convertValues = async () => {
    const input = document.querySelector(".input-value").value
    const htmlValueToConvert = document.querySelector(".from-quantity")
    const htmlValueConverted = document.querySelector(".to-quantity")

    //Valores padrão caso a consulta à API não funcione
    let dolarToday = 5.2 
    let euroToday = 6.2

    if (selector.value == "USD") {
        //Consulta do valor do Dólar
        try {
            const dolarApi = await fetch("https://economia.awesomeapi.com.br/json/USD-BRL")
            const dolarData = await dolarApi.json()
            dolarToday = dolarData[0].high

            console.log(dolarToday)
        } catch (error) {
            console.error({ error: error.message })
        }

        htmlValueConverted.innerHTML = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(input / dolarToday)
    }
    if (selector.value == "EUR") {
        //Consulta do valor do Euro
        try {
            const euroApi = await fetch("https://economia.awesomeapi.com.br/json/EUR-BRL")
            const euroData = await euroApi.json()
            euroToday = euroData[0].high

            console.log(euroToday)
        } catch (error) {
            console.error({ error: error.message })
        }

        htmlValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input / euroToday)
    }

    htmlValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)
}

function changeImage() {
    if (selector.value == "USD") {
        currencyImage.src = "img/dolar-icon.png"
        currencyText.innerHTML = "Dólar"
    }
    if (selector.value == "EUR") {
        currencyImage.src = "img/euro-icon.png"
        currencyText.innerHTML = "Euro"
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelector.addEventListener("change", changeImage)




