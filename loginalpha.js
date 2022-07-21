const data = {"zendrokosa": "909358e635499ae21d46e19ebc352034a6e9ecd5b02b71bf0a10f0b01a1c2995"};
async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

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
    hashedpromise = sha256(wrotedpass)


    if (data.hasOwnProperty(lowjmeno)) {
        console.log("Existence uživatelského jména dokázána.");
        if (hashedpromise == heslo) {
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