const data = {"zendrokosa": "ZendroWow"}
const object = JSON.parse(data)
function Clicked() {
    const name = document.getElementById("uj").value;
    const pass = document.getElementById("ho").value;
    Login(name, pass)
}
function Login(jmeno, heslo) {
    lowjmeno = jmeno.toLowerCase();
    console.log(lowjmeno)
    console.log(object[lowjmeno])
    console.log(heslo)
    if (object.hasOwnProperty(lowjmeno)) {
        if (object[lowjmeno] == heslo) {
            alert("Přihlášeno.")
        }
        else{
            alert("Neznámé heslo.")
        }
    }
    else {
        alert("Neznámé přihlašovací jméno.")
    }
}