document.addEventListener("DOMContentLoaded", () => {
  const countdownElements = document.querySelectorAll('[data-date]');

  countdownElements.forEach((element) => {
    const targetDate = new Date(element.getAttribute('data-date'));
    const daysEl = element.querySelector('.days .time-value');
    const hoursEl = element.querySelector('.hours .time-value');
    const minutesEl = element.querySelector('.mins .time-value');
    const secondsEl = element.querySelector('.secs .time-value');

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = targetDate - now;

      if (timeDiff > 0) {
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / 1000 / 60 / 60) % 24);
        const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
      } else {
        daysEl.textContent = 0;
        hoursEl.textContent = 0;
        minutesEl.textContent = 0;
        secondsEl.textContent = 0;
        clearInterval(timer);
      }
    };

    // Update every second
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
  });
});
