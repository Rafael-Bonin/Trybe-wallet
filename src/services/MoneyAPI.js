const fetchAPI = async () => {
  const money = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resolve = await money.json();
  return resolve;
};

export default fetchAPI;
