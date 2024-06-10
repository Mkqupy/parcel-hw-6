const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  saveFeedbackData(formData);
  showSuccessMessage();
});

const showSuccessMessage = () => {
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Ваше повідомлення успішно відправлено!';
    successMessage.classList.add('success-message');
  
    form.appendChild(successMessage);
  
    setTimeout(() => {
      form.removeChild(successMessage);
    }, 3000);
  };
  