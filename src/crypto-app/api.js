import fetch from "node-fetch";


export async function getGryptos() {
	return fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BNB,XRP,DOGE,MATIC,USDT,BUSD,LTC,MASK&tsyms=USD&api_key=e64344a825c5c3552147fedcb5baa1fcc34005cc85a1772321984ee62ce7b7c1')
		.then((res) => res.json())
		.then((json) => {
			return json})
}
