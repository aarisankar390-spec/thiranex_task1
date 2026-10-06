document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");

  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Please complete the required fields correctly.";
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    status.textContent = "Thank you! Your message has been validated successfully. This demo form is not connected to a server.";
    form.reset();
    status.focus();
  });
});
