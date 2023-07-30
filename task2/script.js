const consolelog1 = document.querySelector('#consolelog');

consolelog1.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль');
});


const consolelog2 = document.querySelector('#alert');

consolelog2.addEventListener('click', () => {
  alert(`Служит для вывода модального диалогового окна`);
});


const consolelog3 = document.querySelector('#prompt');

consolelog3.addEventListener('click', () => {
  alert(`Служит для вывода диалогового окна с полем для ввода данных`);
});