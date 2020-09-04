document.addEventListener('DOMContentLoaded', () => {
  // Contact form
  submitButton = document.getElementById('form-submit');
  formName = document.getElementById('form-name');
  formEmail = document.getElementById('form-email');
  formSubject = document.getElementById('form-subject');
  formMessage = document.getElementById('form-message');

  nameError = document.getElementById('form-name-error');
  emailError = document.getElementById('form-email-error');
  subjectError = document.getElementById('form-subject-error');
  messageError = document.getElementById('form-message-error');

  function submitForm(e) {
    e.preventDefault();
    const name = formName.value;
    const email = formEmail.value;
    const subject = formSubject.value;
    const message = formMessage.value;
    let canSend = true;

    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name === '') {
      nameError.innerHTML = 'Please provide your name!';
      formName.classList.add('input-error');
      canSend = false;
    }
    if (email === '') {
      emailError.innerHTML = 'Please enter your email!';
      formEmail.classList.add('input-error');
      canSend = false;
    } else if (!emailRegex.test(email)) {
      emailError.innerHTML = 'Please enter a valid email!';
      formEmail.classList.add('input-error');
      canSend = false;
    }
    if (subject === '') {
      subjectError.innerHTML = 'Please provide a subject!';
      formSubject.classList.add('input-error');
      canSend = false;
    }
    if (message === '') {
      messageError.innerHTML = 'Please enter your message';
      formMessage.classList.add('input-error');
      canSend = false;
    }

    if (canSend) {
      var template_params = {
        from_name: name,
        from_subject: subject,
        from_email: email,
        from_message: message,
        website: 'Hazel Photography',
      };

      var service_id = 'gmail';
      var template_id = 'template_hWGS0MWW';

      // emailjsUser;
      emailjs.send(service_id, template_id, template_params, emailjsUser);
    }
  }

  submitButton.addEventListener('click', submitForm);

  formName.addEventListener('focus', function (e) {
    formName.classList.remove('input-error');
    nameError.innerHTML = '';
  });

  formEmail.addEventListener('focus', function (e) {
    formEmail.classList.remove('input-error');
    emailError.innerHTML = '';
  });

  formSubject.addEventListener('focus', function (e) {
    formSubject.classList.remove('input-error');
    subjectError.innerHTML = '';
  });

  formMessage.addEventListener('focus', function (e) {
    formMessage.classList.remove('input-error');
    messageError.innerHTML = '';
  });
});
