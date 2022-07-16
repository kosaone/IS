const data ='{"zendro_kosa": "ZendroWOW", "martinzaoral": "test"}'
const obj =JSON.parse(data)
var uj = "uj";
    
function Clicked() {
    const name = document.getElementById("uj").value;
    const pass = document.getElementById("ho").value;
    Login(name, pass)
}
function Login(jmeno, heslo) {
    lowjmeno = jmeno.toLowerCase();
    console.log(lowjmeno)
    console.log(obj[lowjmeno])
    console.log(heslo)
    if (obj.hasOwnProperty(lowjmeno)) {
        if (obj[lowjmeno] == heslo) {
            alert("Přihlášeno.")
        }
    }
    else {
        alert("Error")
    }
}