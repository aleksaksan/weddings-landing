function startCountdown(targetDate) {
  const countdownElement = document.getElementById('countdown');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      countdownElement.innerHTML = 'Уже началось!';
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Перевод и скрытие
    if (days > 0) {
      daysElement.style.display = 'inline';
      daysElement.textContent = `${days} дн.`;
    } else {
      daysElement.style.display = 'none';
    }

    if (hours > 0 || days > 0) {
      hoursElement.style.display = 'inline';
      hoursElement.textContent = `${hours} ч.`;
    } else {
      hoursElement.style.display = 'none';
    }

    minutesElement.textContent = `${minutes} мин.`;
    secondsElement.textContent = `${seconds} сек.`;
  }

  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

const targetDate = new Date('2025-06-27T15:59:59').getTime();
startCountdown(targetDate);
