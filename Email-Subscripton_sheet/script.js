

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz-HSCFHjTsG54P819enMZuA2PRtl6rAljI9sEFKx9HACO7_CZ5NfMBRoSgI2xSmNDkcg/exec'

  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for Subscribing";
        setTimeout(function(){
            msg.innerHTML = "Thank you for Subscribing";
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
