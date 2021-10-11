/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km) va applicato uno sconto del 20 % per i minorenni va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */

//step 1
// chiedo il numero dei chilometri che l'utente dovrà percorrere
const num_km = Number(prompt('Quanti chilometri dovrai percorrere?'));
console.log("l'utente dovrà percorrere", String(num_km), "km");
const user_age = Number(prompt('Quanti anni hai?'));
console.log("l'utente ha", String(user_age), 'anni');

//step 2
//calcolo prezzo biglietto
const ticket_price = num_km * 0.21
console.log('Il costo del biglietto e di euro: ', String(ticket_price));




//step 3
//mostra il prezzo finale