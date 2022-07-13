const newFormHandler = async (event) => {
  event.preventDefault();

  const routeName = document.querySelector('#route-name').value.trim();
  const address = document.querySelector('#address').value.trim();
  const stop2 = document.querySelector('#second-stop').value.trim();
  const stop3 = document.querySelector('#third-stop').value.trim();
  const stop4 = document.querySelector('#fourth-stop').value.trim();
  const stop5 = document.querySelector('#fifth-stop').value.trim();

  if (address) {
    const response = await fetch(`/api/routes`, {
      method: 'POST',
      body: JSON.stringify({address}),
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