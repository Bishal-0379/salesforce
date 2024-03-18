const axios = require('axios');

// Create Investment Account
async function createAccount() {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name: 'Bishal Das',
      email: 'bishal0379.be21@chitkara.edu.in',
      rollNumber: 2110990379,
      phone: 8011253738
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Account Created:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error Creating Account:', error);
  }
}

// Buy Stocks
async function buyStocks(accountNumber, githubRepoLink) {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
      company: 'tesla',
      currentPrice: 1000,
      accountNumber: BFHL0018651,
      githubRepoLink: "https://github.com/Bishal-0379/salesforce"
    }, {
      headers: {
        'Content-Type': 'application/json',
        'bfhl-auth': 2110990379
      }
    });

    console.log('Stocks Bought:', response.data);
  } catch (error) {
    console.error('Error Buying Stocks:', error);
  }
}

// Main Function
async function main() {
  const account = await createAccount();
  const accountNumber = account.accountNumber;
  const githubRepoLink = 'https://github.com/Bishal-0379/salesforce';

  buyStocks(accountNumber, githubRepoLink);
}

main();
