const accountData = {
  name: "Bishal Das",
  email: "bishal0379.be21@chitkara.edu.in",
  rollNumber: 2110990379,
  phone: 8011253738
};

const jsonData = JSON.stringify(accountData);

const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: jsonData
};

fetch('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', fetchOptions)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed: ' + response.statusText);
    }
  })
  .then(data => {
    console.log('Account created:', data);
  })
  .catch(error => {
    console.error('Error creating account:', error);
  });
