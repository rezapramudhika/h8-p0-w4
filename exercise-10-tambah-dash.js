/*Problem
Diberikan sebuah function tambahDash(str) yang menerima satu parameter berupa string. 
Function akan mengembalikan str tersebut dengan menambahkan simbol dash ('-') di antara 
dua angka ganjil di dalam string yang menjadi parameter tersebut. Contoh, jika str adalah 1233897, 
function akan mengembalikan nilai '123-389-7'. 0 bukanlah angka ganjil. */

function tambahDash(str) {
    var arrStr = str.split('');
    var temp = [];

    for (var i=0; i<=arrStr.length-1; i++){
        temp.push(arrStr[i]);
        if (Number(arrStr[i])%2!==0){
            if (Number(arrStr[i+1])%2!==0 && i!==arrStr.length-1){
                temp.push('-');
            }
        }
    }

    return temp.join('');
  }
  
  // TEST CASES
  console.log(tambahDash('454793')); // '4547-9-3'
  console.log(tambahDash('1739028')); // '1-7-3-9028'
  console.log(tambahDash('891829')); // '89-1829'
  console.log(tambahDash('10192')); // '101-92'
  console.log(tambahDash('222222')); // '222222'