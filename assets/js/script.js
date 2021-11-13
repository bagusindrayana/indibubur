var i = 0;
var i2 = 0;
var txt = '*Syarat & Ketentuan Berlaku';
var speed = 100;
var audio = document.getElementById("player");

function showMain(){
    document.getElementById("loading").style.display = 'none';
    var main = document.getElementsByClassName("flex-container");
    for (let x = 0; x < main.length; x++) {
        const e = main[x];
        e.style.display = 'flex';

        
    }

    var main2 = document.getElementsByClassName("wrapper");
    for (let x = 0; x < main2.length; x++) {
        const e = main2[x];
        e.style.display = 'block';

        
    }
    audio.play();
    
    
}


audio.onended = function() {
    audio.currentTime = 0;
    audio.play();
    
    masAgus();
    
};
setInterval(function(){ 
    
    if(audio.currentTime >= 15.5){
        masPrass();
        if(i2 > txt.length){
            i2 = 0;
            document.getElementById("skb-pras").innerHTML = "";
            setTimeout(typeWriter2, 2000);
        }
    }

    
 }, 1000);




function typeWriter() {
    if (i < txt.length) {
        document.getElementById("skb").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


function typeWriter2() {
    if (i2 < txt.length) {
        document.getElementById("skb-pras").innerHTML += txt.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
    }
}


audio.onplay = function() {
    showMain();
    i = 0;
    i2 = txt.length+1;
    document.getElementById("skb").innerHTML = "";
    setTimeout(typeWriter, 2000);
};


isAutoplaySupported = function(callback) {
    if (typeof callback !== 'function') {
        console.log('isAutoplaySupported: Callback must be a function!');
        return false;
    }
    if (!sessionStorage.autoplaySupported) {
        
        audio.autoplay = true;
        audio.src = window.location.origin+"/assets/audio.mp3";
        audio.load();
        audio.style.display = 'none';
        audio.playing = false;
        audio.play();

        audio.onplay = function() {
            this.playing = true;
            showMain();
            i = 0;
            i2 = txt.length+1;
            document.getElementById("skb").innerHTML = "";
            setTimeout(typeWriter, 2000);
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
        alert("Ops browsermu enggak ijinin autoplay jadi silahkan play manual musiknya")
        document.getElementById("player").classList.remove("hide");
        document.getElementById("player").classList.add("show");
        console.log('HTML5 Audio Autoplay Not Supported :(');
    }
});


function masPrass(){
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
}

function masAgus(){
    document.getElementById("paket-mas-agus").classList.remove("transition-paket-mas-agus");
    document.getElementById("mas-agus").classList.remove("transition-mas-agus");
    document.getElementById("bg-shape").classList.remove("shape-transition");

    document.getElementById("mas-pras").classList.add("hide");
    document.getElementById("mas-pras").classList.remove("transition-mas-prass");
    document.getElementById("paket-mas-pras").classList.add("hide");
    document.getElementById("paket-mas-pras").classList.remove("transition-paket-mas-pras");


    document.getElementById("bagian-mas-agus").classList.remove("bagian-mas-agus-transition");

    document.getElementById("bagian-mas-pras").classList.add("hide");
    document.getElementById("bagian-mas-pras").classList.remove("bagian-mas-pras-transition");

  
}



