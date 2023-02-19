document.getElementById('date').DatePickerX.init();

const validate = new window.JustValidate('form');

const validation = new JustValidate('form');

validation
  .addField('#fullName', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#useImages', [
    {
      rule: 'required',
    },
  ]);
