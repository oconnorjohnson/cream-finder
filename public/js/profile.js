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
  .querySelector('.stop-list')
  .addEventListener('click', delButtonHandler);