const createInvestmentAccount = async (name, email, rollNumber, phone) => {
  const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    name,
    email,
    rollNumber,
    phone,
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

const name = 'Bishal Das';
const email = 'bishal0379.be21@chitkara.edu.in';
const rollNumber = 2110990379;
const phone = 8011253738;

createInvestmentAccount(name, email, rollNumber, phone)
  .then((data) => console.log('Account created:', data))
  .catch((error) => console.error('Error:', error));
