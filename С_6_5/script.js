const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    let wdt = window.screen.width;
    let hgt = window.screen.height;
    alert(`Your screen is width ${wdt} and height ${hgt}`);
});