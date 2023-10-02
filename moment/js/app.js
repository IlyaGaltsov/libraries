const myDate = document.getElementById('mydate');
const userInfo = document.getElementById('userdate');

let date = moment('2004-01-08', 'YYYY-MM-DD');
myDate.textContent = date.format("MMM Do YYYY");

const userInputDate = prompt("Введите вашу дату рождения в формате DD.MM.YYYY");

// Регулярное выражение для проверки формата даты "DD.MM.YYYY"
const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;

const errorElement = document.getElementById('error-message');

if (userInputDate) {
    // Проверяем, соответствует ли введенная строка формату "DD.MM.YYYY"
    if (datePattern.test(userInputDate)) {
        const userBirthDate = moment(userInputDate, 'DD.MM.YYYY');
        if (userBirthDate.isValid()) {
            const formattedDate = userBirthDate.format("MMM Do YYYY");
            userInfo.textContent = formattedDate;
            errorElement.style.display = 'none';
        } else {
            errorElement.textContent = 'Некорректная дата';
            errorElement.style.display = 'block';
        }
    } else {
        errorElement.textContent = 'Неверный формат даты. Введите в формате DD.MM.YYYY';
        errorElement.style.display = 'block';
    }
} else {
    errorElement.textContent = 'Вы не ввели дату рождения';
    errorElement.style.display = 'block';
}

