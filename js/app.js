const days = document.querySelector('#days-js')
const hours = document.querySelector('#hours-js')
const minutes = document.querySelector('#minutes-js')
const seconds = document.querySelector('#seconds-js')

const timer = new Date(2022, 8, 30, 12);
console.log(`${timer.getDate()} - ${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`);

setInterval(() => {
    const now = new Date(timer.getTime() - Date.now() - 1000);

    days.textContent = now.getDate();

    hours.textContent = now.getHours();

    minutes.textContent = now.getMinutes();

    seconds.textContent = now.getSeconds();
}, 1000);
