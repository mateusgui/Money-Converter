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
    let btcToday = 0.0000000000000001

    //Consulta valores
    try {
        const valoresApi = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
        const valoresData = await valoresApi.json()

        dolarToday = valoresData.USDBRL.bid
        euroToday = valoresData.EURBRL.bid
        btcToday = valoresData.BTCBRL.bid

        console.log(`Dólar: R$ ${dolarToday}`)
        console.log(`Euro: R$ ${euroToday}`)
        console.log(`Bitcoin: R$ ${btcToday}`)
    } catch (error) {
        console.error({ error: error.message })
    }

    //Conversão do valor baseado no valor do select
    if (selector.value == "USD") {
        htmlValueConverted.innerHTML = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(input / dolarToday)
    }
    if (selector.value == "EUR") {
        htmlValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input / euroToday)
    }
    if (selector.value == "BTC") {
        htmlValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(input / btcToday)
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
    if (selector.value == "BTC") {
        currencyImage.src = "img/btc-icon.png"
        currencyText.innerHTML = "Bitcoin"
    }
    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelector.addEventListener("change", changeImage)




