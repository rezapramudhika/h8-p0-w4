/*Problem
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
Function akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet 
setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a. */

function ubahHuruf(kata) {
    var kataArr = kata.split('');
    var newArr = [];
    
    for (var i=0; i<=kataArr.length-1; i++){
        newArr.push(String.fromCharCode(kataArr[i].charCodeAt(0) + 1));
    } 

    return newArr.join('');
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu