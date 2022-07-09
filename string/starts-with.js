function startsWith(str, search, position = 0) {
  let res = false;
  let f = 0;

  for (let i = position; f < search.length; i++) {
    if (str[i] === search[f]) {
      res = true;
      f++;
    } else {
      res = false;
      break;
    }
  }
  return res;
}

/*
Il startsWith()metodo determina se una stringa inizia con i caratteri di una stringa specificata, restituendo true o false come appropriato.

3: Parametri
searchString
I caratteri da cercare all'inizio di questa stringa.

position Opzionale
La posizione in questa stringa in cui iniziare la ricerca di searchString. Il valore predefinito è 0.

4: Valore di ritorno
true se i caratteri indicati si trovano all'inizio della stringa; altrimenti, false.

Descrizione
Questo metodo consente di determinare se una stringa inizia o meno con un'altra stringa. Questo metodo fa distinzione tra maiuscole e minuscole.


5: Descrizione 
La funzione riceve dei caratteri.
Percorrendo con il for loop controlla se i primi caratteri della stringa, o i caratteri dell'indice indicato dal paramentro position, corrispondono a quelli ricevuti.
Se si restituisce un true, altrimenti false.

6: Pseudocodice

*/
