// alertni chaqirib olyabmiz!
// let ogohlantirish = document.querySelector('#ogohlantirish');
// let ok = document.querySelector('#ok');

let message1 = document.querySelector('.error-message1')

//bot token
var telegram_bot_id = "7035233726:AAFbwSGwBuUsX4pRa2TJN7u70RdjKcZ21Cc"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1002082586286; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;


let yunalish = document.querySelector('#fanlar');

function yunalishlar(yunalish){
    
    var value = yunalish.value;
    var text = yunalish.options[yunalish.selectedIndex].text;

    return text
}


var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    fanlar = document.getElementById("fanlar").value;
    // familya = document.getElementById("familya").value;
    // message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nNomer:" + email + "\nYunalish:" + yunalishlar(yunalish);
    
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    

    // message1.innerHTML = "Muvafaqtli junatildi."
    // message1.style = "color: white; background-color: green; padding: 5px; border-radius: 10px; display: flex; justify-content: center; align-items: center;"
    // ogohlantirish.style = "display: block;"

    // ok.addEventListener('click',()=>{
    //     ogohlantirish.style = "display: none"
    // })
    return false;
};



let yangiliklar = document.querySelector('#yangiliklar');

yangiliklar.addEventListener('click', ()=>{
    alert("Hozircha Yangilik yo'q")
})