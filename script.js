// Loading animation hide after page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Bootstrap form validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      if (!form.checkValidity()) {
        event.stopPropagation()
      } else {
        // Jika valid, tampilkan pesan sukses dan sembunyikan form
        form.style.display = 'none'
        document.getElementById('successMessage').style.display = 'block'
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#') && !href.startsWith('http')) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
});
