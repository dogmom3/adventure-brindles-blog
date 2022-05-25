async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
  // const content = document.querySelector('input[name="content"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  const content = document.querySelector('input[name="content"]').value;

    if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title, content

      }),

      headers: {
        'Content-Type': 'application/json'
      }
      
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  // document.querySelector('.save-post-btn').addEventListener('submit', editFormHandler);
  