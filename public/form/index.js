window.onload = () => {
  const DYNAMIC_CLASSES = {
    ERROR_VISIBLE: 'visible',
  };

  const nameField = {
    field: document.getElementById('name')?.parentElement,
	  input: document.getElementById('name'),
	  label: document.getElementById('name')?.nextElementSibling,
	  error: document.getElementById('name')?.nextElementSibling?.nextElementSibling,
  };

  nameField.input.addEventListener('change', (event) => {
	  nameField.error.classList.remove(DYNAMIC_CLASSES.ERROR_VISIBLE);
	  nameField.error.innerText = '';

    if (event.target.value.toLowerCase().replace(/[a-z]|[а-яё]/g, '').length) {
      nameField.error.classList.add(DYNAMIC_CLASSES.ERROR_VISIBLE);
      nameField.error.innerText = 'Допустим ввод букв англ./ру.';
    }
  });

  nameField.input.addEventListener('blur', (event) => {
    if (!event.target.value.length) {
	    nameField.error.innerText = 'Поле обязательно к заполнению';
      nameField.error.classList.add(DYNAMIC_CLASSES.ERROR_VISIBLE);
    }
  });
};
