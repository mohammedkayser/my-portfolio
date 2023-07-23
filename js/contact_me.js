document.addEventListener("DOMContentLoaded", function () {
  const sendMessageButton = document.getElementById("sendMessageButton");

  sendMessageButton.addEventListener("click", function () {
    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Add the name at the end of the main message
    const fullMessage = `${message}\n\n- ${name}\n\n- ${email}`;

    const mailtoLink = `mailto:mohammedkayser143@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(fullMessage)}`;
    
    window.location.href = mailtoLink;
  });
});



