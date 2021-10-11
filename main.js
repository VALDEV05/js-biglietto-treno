/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km) va applicato uno sconto del 20 % per i minorenni va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */




/* messagi da stampare*/
//step 1
// chiedo il numero dei chilometri che l'utente dovrà percorrere
const num_km = Number(prompt('Quanti chilometri dovrai percorrere?')).toFixed(0);
console.log("l'utente dovrà percorrere", String(num_km), "km");
const message_km =
    `
    L'utente dovrà percorrere ${num_km} km
`
document.getElementById("km_to_do").innerHTML = message_km

const user_age = Number(prompt('Quanti anni hai?'));
console.log("l'utente ha", String(user_age), 'anni');

//verifica che il numero di kilometri da percorrere e l'età sia valido
const message_age =
    `
    L'utente ha ${user_age} anni
`
document.getElementById("user_age").innerHTML = message_age

if ((num_km != 0) && (user_age != 0)) {

}
else {
    alert('qualcosa non va');
    document.getElementById("problem_ticket_price").innerHTML = 'qualcosa non va'

}

//step 2
//calcolo prezzo biglietto
const ticket_price = (num_km * 0.21).toFixed(2);
const message_ticket_price =
    `
Il biglietto costa: ${ticket_price} €
`
document.getElementById("problem_ticket_price").innerHTML = message_ticket_price

const discount_20 = ((ticket_price / 100) * 20).toFixed(2);
const discount_40 = ((ticket_price / 100) * 40).toFixed(2);
const ticket_20 = (ticket_price - discount_20).toFixed(2);
const ticket_40 = (ticket_price - discount_40).toFixed(2);


const message_discount_20 =
    `
    L'utente essendo minorenne ha diritto ad uno sconto del 20% ovvero avrà una riduzione di ${discount_20} €
`
const message_discount_40 =
    `
    L'utente esssendo over 65 ha diritto ad uno sconto del 40% ovvero avrà una riduzione di ${discount_40} €
`
const message_no_discount =
    `
    L'utente non ha diritto a nessuno sconto
`
const message_ticket_20 =
    `
    Il biglietto scontato del 20% costerà ${ticket_20} €
`
const message_ticket_40 =
    `
    Il biglietto scontato del 40% costerà ${ticket_40} €
`
const message_new_ticket_price =
    `
    Il biglietto non avendo potuto usufruire di nessuno sconto costerà ${ticket_price} €
`
//step 3 
//calcolo sconti
//i < 18 sconto 20%
// i > 65 sconto 45%
//capisci età utente

if (user_age < 18) {
    console.log('applica uno sconto del 20%')
    console.log('lo sconto è pari a:', discount_20, String('€'));
    console.log('il costo del biglietto scontato è:', ticket_20, String('€'));
    document.getElementById("discount").innerHTML = message_discount_20
    document.getElementById("new_price_ticket").innerHTML = message_ticket_20

}
else if (user_age > 65) {
    console.log('applica uno sconto del 40%')
    console.log('lo sconto è pari a:', discount_40, String('€'));
    console.log('il costo del biglietto scontato è:', ticket_40, String('€'))
    document.getElementById("discount").innerHTML = message_discount_40
    document.getElementById("new_price_ticket").innerHTML = message_ticket_40

}
else {
    console.log('non è possibile applicare nessuno sconto')
    console.log('Il costo del biglietto e di euro: ', String(ticket_price), String('€'));
    document.getElementById("discount").innerHTML = message_no_discount
    document.getElementById("new_price_ticket").innerHTML = message_new_ticket_price

}