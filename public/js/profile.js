const newFormHandler = async (event) => {
  event.preventDefault();

  const routeName = document.querySelector('#route-name').value.trim();
  const address1 = document.querySelector('#address').value.trim();
  const address2 = document.querySelector('#second-stop').value.trim();
  const address3 = document.querySelector('#third-stop').value.trim();
  const address4 = document.querySelector('#fourth-stop').value.trim();
  const address5 = document.querySelector('#fifth-stop').value.trim();
 const addressObj1 = {address:address1, order:1}
 const addressObj2 = {address:address2, order:2}
 const addressObj3 = {address:address3, order:3}
 const addressObj4 = {address:address4, order:4}
 const addressObj5 = {address:address5, order:5}
 
  if (address1 && address2 && address3 && address4 && address5) {
    const response = await fetch(`/api/routes`, {
      method: 'POST',
      body: JSON.stringify({addressObj1, addressObj2, addressObj3, addressObj4, addressObj5 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/truckprofile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/routes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/truckprofile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document
  .querySelector('.new-route-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.stop-list')
  .addEventListener('click', delButtonHandler);