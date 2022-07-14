const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log('aaaa')

  const userName = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (userName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/truckprofile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormForBusinessHandler = async (event) => {
  event.preventDefault();
  console.log('dddd')

  const userName = document.querySelector('#business-name-signup').value.trim();
  const firstName = document.querySelector('#driver-name-signup').value.trim();
  const email = document.querySelector('#company-email-signup').value.trim();
  const password = document.querySelector('#company-password-signup').value.trim();
  const driver = true;

  if (userName && firstName && email && password && driver) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, email, password, firstName, driver }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/truckprofile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

document
  .querySelector('.business-signup-form')
  .addEventListener('submit', signupFormForBusinessHandler);