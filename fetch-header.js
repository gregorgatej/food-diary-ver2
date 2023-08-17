      // Fetch and insert the header content
      fetch('header.html')
          .then(response => response.text())
          .then(content => {
              document.getElementById('header-placeholder').innerHTML = content;
          })
          .catch(error => {
              console.error('Error fetching header:', error);
          });