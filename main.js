/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km) va applicato uno sconto del 20 % per i minorenni va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */

//step 1
// chiedo il numero dei chilometri che l'utente dovrà percorrere
const num_km = Number(prompt('Quanti chilometri dovrai percorrere?')).toFixed(0);
console.log("l'utente dovrà percorrere", String(num_km), "km");


const user_age = Number(prompt('Quanti anni hai?'));
console.log("l'utente ha", String(user_age), 'anni');
//verifica che il numero di kilometri da percorrere e l'età sia valido

if ((num_km == 0) && (user_age == 0)) {

}
else {
    alert('qualcosa non va');
}


//step 2
//calcolo prezzo biglietto
const ticket_price = (num_km * 0.21).toFixed(2);


const discount_20 = ((ticket_price / 100) * 20).toFixed(2);
const discount_40 = ((ticket_price / 100) * 40).toFixed(2);
const ticket_20 = (ticket_price - discount_20).toFixed(2)
const ticket_40 = (ticket_price - discount_40).toFixed(2)


//step 3 
//calcolo sconti
//i < 18 sconto 20%
// i > 65 sconto 45%
//capisci età utente

if (user_age < 18) {
    console.log('applica uno sconto del 20%')
    console.log('lo sconto è pari a:', discount_20, String('€'));
    console.log('il costo del biglietto scontato è:', ticket_20, String('€'));
}
else if (user_age > 65) {
    console.log('applica uno sconto del 40%')
    console.log('lo sconto è pari a:', discount_40, String('€'));
    console.log('il costo del biglietto scontato è:', ticket_40, String('€'))
}
else {
    console.log('non è possibile applicare nessuno sconto')
    console.log('Il costo del biglietto e di euro: ', String(ticket_price), String('€'));
}