const accountData = {
  company: "tesla",
  currentPrice: 1000,
  accountNumber: "BFHL0018651",
  githubRepoLink: "https://github.com/Bishal-0379/salesforce"
};

const jsonData = JSON.stringify(accountData);

const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'bfhl-auth': '2110990379'
  },
  body: jsonData
};

fetch('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', fetchOptions)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed: ' + response.statusText);
    }
  })
  .then(data => {
    console.log('Stocks bought:', data);
  })
  .catch(error => {
    console.error('Error buying stocks:', error);
  });
