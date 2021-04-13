var s2_num = parseInt(prompt("Inserisci un numero "));
if(isNaN(s2_num)) location.reload();
console.log("Numero Inserito: \n"+s2_num)
if(s2_num%2) console.log("Numero dispari (+1) => "+(s2_num+1))
  else console.log("Numero Pari => "+s2_num)