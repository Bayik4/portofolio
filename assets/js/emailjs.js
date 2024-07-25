(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "sxUGhJT-Y5nXX8Cr7",
    });
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_jiimz0i', 'template_37dt67t', this)
          .then((res) => {
              if(res.status == 200) {
                alert('Success Send Email');
              } else {
                alert('Gagal mengirim email '+res.text);
              }
          }, (error) => {
              alert('FAILED...', error);
          });
  });
}