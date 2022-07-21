const data = {"zendrokosa": "909358e635499ae21d46e19ebc352034a6e9ecd5b02b71bf0a10f0b01a1c2995"};


require.config({packages: [{name: 'crypto-js',location: './bower_components/crypto-js',main: 'index'}]});

require(["crypto-js/aes", "crypto-js/sha256"], function (AES, SHA256) {
    console.log(SHA256("Message"));
});

function Clicked() {
    const name = document.getElementById("uj").value;
    const pass = document.getElementById("ho").value;
    Login(name, pass)
}
function Login(jmeno, heslo) {
    lowjmeno = jmeno.toLowerCase();
    console.log(data[lowjmeno]);
    console.log(heslo);
    wrotedpass = data[lowjmeno];
    if (data.hasOwnProperty(lowjmeno)) {
        console.log("Existence uživatelské jména dokázána.");
        if (wrotedpass == heslo) {
            console.log("Správnost hesla dokázána.");
        }
        else {
            console.log("Error: Nesprávné heslo.");
        }
    }
    else {
        console.log("Error: Jméno neověřeno.");
    }
}