const buyStocks = async (company, currentPrice, accountNumber, githubRepoLink) => {
  const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
  const headers = {
    'Content-Type': 'application/json',
    'bfhl-auth': 'Your Roll Number',
  };
  const body = JSON.stringify({
    company,
    currentPrice,
    accountNumber,
    githubRepoLink,
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const company = 'Tesla';
const currentPrice = 1000;
const accountNumber = "BFHL0018651";
const githubRepoLink = 'https://github.com/Bishal-0379/salesforce';

buyStocks(company, currentPrice, accountNumber, githubRepoLink)
  .then((data) => console.log('Stocks bought:', data))
  .catch((error) => console.error('Error:', error));
