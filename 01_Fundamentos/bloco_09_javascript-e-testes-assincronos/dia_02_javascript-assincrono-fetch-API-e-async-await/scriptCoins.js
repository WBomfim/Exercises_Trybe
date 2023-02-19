const addInfo = (coin, converteCoin) => {
  const ulUsd = document.querySelector('#dolares');
  const liUsd = document.createElement('li');
  const priceUsd = parseFloat(coin.priceUsd).toFixed(2)
  liUsd.innerHTML = `${coin.name} (${coin.symbol}):  US$ ${priceUsd}`
  ulUsd.appendChild(liUsd)

  const ulRs = document.querySelector('#reais');
  const liRs = document.createElement('li');
  const priceRs = parseFloat(coin.priceUsd * converteCoin.brl).toFixed(2)
  liRs.innerHTML = `${coin.name} (${coin.symbol}):  R$ ${priceRs}`
  ulRs.appendChild(liRs)
}

const usdCurrencies = async () => {
  try {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const endpointUsd = '/currencies/usd.min.json'
    const url = baseUrl.concat(endpointUsd);
    const response = await fetch(url)
    const data = await response.json()
    return data.usd
  } catch (error) {
    console.log(error);
  }
};

const getCoins = async () => {
  try{
    const urlAPI = `https://api.coincap.io/v2/assets`
    const response = await fetch(urlAPI);
    const coins = await response.json();
    const { data } = coins;
    const convert = await usdCurrencies()
    data.filter((coin) => coin.rank <= 10)
    .forEach(coin => addInfo(coin, convert));
  } catch (error) {
    console.log(error);
  }
}

window.onload = () => {
  getCoins()
}
