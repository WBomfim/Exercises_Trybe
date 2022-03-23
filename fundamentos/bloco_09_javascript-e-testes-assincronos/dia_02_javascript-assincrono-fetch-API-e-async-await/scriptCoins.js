const urlAPI = `https://api.coincap.io/v2/assets`

const addInfo = (data) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const price = parseFloat(data.priceUsd).toFixed(2)
  li.innerHTML = `${data.name} (${data.symbol}):  US$ ${price}`
  ul.appendChild(li)
}

const getCoins = async () => {
  try{
    const response = await fetch(urlAPI);
    const coins = await response.json();
    const { data } = coins;
    data.filter((coin) => coin.rank <= 10)
    .forEach(coin => addInfo(coin));
  } catch (error) {
    console.log(error);
  }
}

window.onload = () => {
  getCoins()
}
