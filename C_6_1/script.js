const btn = document.querySelector(".j-btn-test");
const h_icon = document.querySelector(".hidden_icon");
const w_icon = document.querySelector(".white_icon");
const t_icon = document.querySelector(".transparent_icon");

btn.addEventListener('click', function() {
    t_icon.classList.toggle('hidden_icon');
    w_icon.classList.toggle('white_icon');
});