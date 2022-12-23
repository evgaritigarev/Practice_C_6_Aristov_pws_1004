const wsUrl = new WebSocket("ws://echo-ws-service.herokuapp.com/");
const chat = document.querySelector(".chat_window");
const servMess = document.querySelector(".server_message");
const userMess = document.querySelector(".user_message");
const input = document.querySelector(".input_text");
const btnSend = document.querySelector(".btn_send_message");
const btnGeo = document.querySelector(".btn_geolocation");

const error = () => {
    chat.innerHTML += '<div class="display_message user_message"><p>Невозможно получить ваши координаты</p></div>'
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    chat.innerHTML += '<div class="display_message user_message"><p><a class="map_link" href="">Гео-локация</a></p></div>'
    let mapLink = document.querySelector(".map_link");
    mapLink.href = `https://www.openstreetmap.org/#map=7/${latitude}/${longitude}`;
}

btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        chat.innerHTML += '<div class="display_message user_message"><p>Геолокация не поддерживается вашим браузером</p></div>'
    } else {
        chat.innerHTML += '<div class="display_message user_message"><p>Определение местоположения...</p></div>'
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

wsUrl.onmessage = function(e) {
    const data = JSON.parse(e.data);
    chat.innerHTML += '<div class="display_message server_message"><p>' + data.message + '</p></div>'
};

btnSend.addEventListener('click', () => {
    message = input.value;
    chat.innerHTML += '<div class="display_message user_message"><p>' + input.value + '</p></div>'
    wsUrl.send(JSON.stringify({
        'message' : message
    }));
    input.value = '';
});