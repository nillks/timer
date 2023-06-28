document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылки на элементы для отображения часов, минут и секунд
  let hoursElement = document.querySelector(".hours");
  let minutesElement = document.querySelector(".minutes");
  let secondsElement = document.querySelector(".seconds");

  function updateNumber(element, value) {
    // Применяем анимацию затухания и плавного появления
    element.style.opacity = 0.8;
    element.style.transition = "all ease-in-out 0.9s";

    setTimeout(function () {
      // Устанавливаем новое значение и восстанавливаем полную прозрачность
      element.innerHTML = value;
      element.style.opacity = 1;
    }, 500);
  }

  function getDate() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");

    // Обновляем значения часов, минут и секунд с помощью функции updateNumber
    updateNumber(hoursElement, hours);
    updateNumber(minutesElement, minutes);
    updateNumber(secondsElement, seconds);
  }

  // Получаем текущую дату и время при загрузке страницы
  getDate();

  // Устанавливаем интервал для обновления времени каждую секунду
  let intervalID = window.setInterval(getDate, 1000);
});
