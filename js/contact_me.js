document.addEventListener("DOMContentLoaded", function () {
  const sendMessageButton = document.getElementById("sendMessageButton");

  sendMessageButton.addEventListener("click", function () {
    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:mohammedkayser143@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  });
});




