
  const form = document.getElementById("myform");
  const msg = document.getElementById("msg");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    form.reset();
    msg.style.display = 'block';

    // Hide the message after 3 seconds
    setTimeout(() => {
      msg.style.display = 'none';
    }, 10000);
  });