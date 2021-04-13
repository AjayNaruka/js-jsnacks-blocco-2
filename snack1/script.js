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