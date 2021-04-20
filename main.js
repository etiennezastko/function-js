/* let str = "Bonjour je m'appelle Etienne ZASTKO ,et je suis fier de m'appellez Etienne ZASTKO";
let res = str.replace(/e/g,"€");
res = res.replace(/Eti€nn€/g,'Adam')
document.getElementById('str').innerHTML = str;
document.getElementById('res').innerHTML = res;
 */
/* let calcul = function(nombre){
    return nombre*nombre;
} */
function calcul(nombre){
    return nombre*nombre;
}

let x = calcul(8);
document.getElementById('str').innerHTML = x; 