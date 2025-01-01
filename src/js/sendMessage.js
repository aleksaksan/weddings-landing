const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbxnw_vTsIqnhe4sAw1teh5pPh_Q_K2e_lvvL9epr3XYeyxCcg7GeX--1KOXZEzFUp4m/exec';

const sendMessage = async (data) => {
  try {
    const response = await fetch(googleSheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

const form = document.getElementById('send-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = document.getElementById('message')?.value;
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  
  const isWill = form.querySelector('input[name=isWill]:checked')?.value;
  const food = form.querySelector('input[name=food]:checked')?.value;

  const drinks = [...form.querySelectorAll('input[name=drink]:checked')].map(input => input.value).join('; ');

  const data = {
    name: name,
    isWill: isWill,
    food: food,
    drink: drinks,
    message: message,
  };
  
  sendMessage(data);
  const submitBtn = form.getElementsByTagName('button')[0];
  submitBtn.textContent = "данные анкеты отправлены";
  submitBtn.disabled = true;
  submitBtn.style.opacity = "70%";
});

