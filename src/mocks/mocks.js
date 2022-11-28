export const getRandCountryCode = () => {
  const countryCodes = [
    'UA',
    'RU',
    'KZ',
    'BY',
  ];
  const countryIndex = Math.floor(Math.random() * 7);

  return countryCodes[countryIndex]
    ? countryCodes[countryIndex]
    : Math
      .random()
      .toString(36)
      .substring(4)
      .toUpperCase()
      .replace('/[^A-Z]/g', '')
      .slice(0, 2);
};

export const getCryptos = () => [
  'BTC',
  'ETH',
  'USDT',
  'EGLD',
  'BNB',
  'MATIC',
  'USDC',
  'SHIB',
  'XRP',
  'BUSD',
  'ADA',
  'DOGE',
  'SOL',
  'WBTC',
  'LTC',
  'ATOM',
  'ETC',
  'ALGO',
  'BCH',
  'MANA',
];
