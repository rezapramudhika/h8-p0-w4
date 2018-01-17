/*Problem
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter 
tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, 
sehingga function akan me-return 2. */

function digitPerkalianMinimum(angka) {
    var temp = [];
  
    for (var i=angka; i>=0; i--){
      if (angka%i===0){
        temp.push(i);
      }
    }
    
    var lengths = temp.length-1;
    var temp2 = [];
    for (var j=0; j<=(temp.length/2)-1; j++){
      temp2.push(''+temp[j]+temp[lengths]);
      lengths--;
    }
    
    var theShortestLength = 0;
    for (var k=0; k<=temp2.length-1; k++){
      if (k===0){
        theShortestLength = temp2[k].length;
      }else{
        if(temp2[k].length<theShortestLength){
          theShortestLength = temp2[k].length;
        }
      }
    }
    
    if (angka === 1){
      theShortestLength=2;
    }
    console.log(temp2);
    return theShortestLength;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2