<script>
      // Load the contents of the navigation bar file
      fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
          // Insert the contents of the file into the <nav> element
          const navElement = document.querySelector('nav');
          navElement.innerHTML = data;
        });
    </script>  