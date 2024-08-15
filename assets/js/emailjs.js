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
                // alert('Success Send Email');
                Swal.fire({
                  title: "Success",
                  text: "The email has been sent",
                  icon: "success"
                });

                setTimeout(() => {
                  document.getElementById("from_name").value = "";
                  document.getElementById("email").value = "";
                  document.getElementById("message").value = "";
                }, 5000);
              } else {
                // alert('Gagal mengirim email '+res.text);
                Swal.fire({
                  title: "Failed",
                  text: "Email failed to send",
                  icon: "error"
                });
              }
          }, (error) => {
              alert('FAILED...', error);
          });
  });
}