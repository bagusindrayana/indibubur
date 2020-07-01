var i = 0;
var txt = '*Syarat & Ketentuan Berlaku';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        console.log(i)
        document.getElementById("skb").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}



setTimeout(() => {
    typeWriter();
}, 2000);

isAutoplaySupported = function(callback) {
    if (typeof callback !== 'function') {
        console.log('isAutoplaySupported: Callback must be a function!');
        return false;
    }
    if (!sessionStorage.autoplaySupported) {
        var audio = document.getElementById("player");
        audio.autoplay = true;
        audio.src = './audio.mp3';
        audio.load();
        audio.style.display = 'none';
        audio.playing = false;
        audio.play();

        audio.onplay = function() {
            this.playing = true;
        };
        audio.oncanplay = function() {
            if (audio.playing) {
                sessionStorage.autoplaySupported = 'true';
                callback(true);
            } else {
                sessionStorage.autoplaySupported = 'false';
                callback(false);
            }
        };
    } else {
        if (sessionStorage.autoplaySupported === 'true') {
            callback(true);
        } else {
            callback(false);
        }
    }
}

isAutoplaySupported(function(supported) {
    if (supported) {
        console.log('HTML5 Audio Autoplay Supported!');
    } else {
        alert("Ops browsermu gk ijinin autoplay jadi silahkan play manual musiknya")
        document.getElementById("player").classList.remove("hide");
        document.getElementById("player").classList.add("show");
        console.log('HTML5 Audio Autoplay Not Supported :(');
    }
});


setTimeout(function(){
    document.getElementById("paket-mas-agus").classList.add("transition-paket-mas-agus");
    document.getElementById("mas-agus").classList.add("transition-mas-agus");
    document.getElementById("bg-shape").classList.add("shape-transition");

    document.getElementById("mas-pras").classList.remove("hide");
    document.getElementById("mas-pras").classList.add("transition-mas-prass");
    document.getElementById("paket-mas-pras").classList.remove("hide");
    document.getElementById("paket-mas-pras").classList.add("transition-paket-mas-pras");


    document.getElementById("bagian-mas-agus").classList.add("bagian-mas-agus-transition");

    document.getElementById("bagian-mas-pras").classList.remove("hide");
    document.getElementById("bagian-mas-pras").classList.add("bagian-mas-pras-transition");
},16500)


function typeWriter2() {
    if (i < txt.length) {
        document.getElementById("skb-pras").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter2, speed);
    }
}

setTimeout(() => {
    i = 0
    typeWriter2();
}, 17500);