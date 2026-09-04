(() => {
  'use strict'
  
  //fetch all the forms we need to apply custom validation style to
  const forms = document.querySelectorAll('.needs-validation')
  
  //Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()