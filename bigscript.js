///////////////////////
console.log("> SNACK 1 \n");
//INSERIMENTO
var s1_num;
var s1_array=[];
for(var s1_index=0;s1_index<5;s1_index++){
  s1_num =prompt("Inserisci un numero: \n")
  if(!isNaN(s1_num)){
    s1_array[s1_index] = s1_num
  }else{
    s1_index--;
  }
}
console.log(s1_array);

//CALCOLO SOMMA (for)
var s1_sumF =0;
for(s1_index=0; s1_index<s1_array.length;s1_index++) s1_sumF +=parseInt(s1_array[s1_index]);
console.log("La somma dei numeri (FOR) e': \n"+s1_sumF);

//CALCOLO SOMMA (while)
var s1_sumW =0;
s1_index=0;
while(s1_index<s1_array.length){
  s1_sumW +=parseInt(s1_array[s1_index]);
  s1_index++;
}
console.log("La somma dei numeri (WHILE) e': \n"+s1_sumW);

//////////////////////////////
console.log("> SNACK 2 \n");
var s2_num = parseInt(prompt("Inserisci un numero "));
if(isNaN(s2_num)) location.reload();
console.log("Numero Inserito: \n"+s2_num)
if(s2_num%2) console.log("Numero dispari (+1) => "+(s2_num+1))
  else console.log("Numero Pari => "+s2_num);