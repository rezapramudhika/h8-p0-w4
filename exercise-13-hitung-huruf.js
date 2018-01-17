/*Problem
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. 
Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" 
memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. 
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1. */

function hitungHuruf(kata) {
    var kataArr = kata.split(' ');
    var tempHurufSudahKeluar = '';
    var count = 0;
    var arrTemp = [];

    for (var i=0; i<=kataArr.length-1; i++){
        var kataArr2 = kataArr[i].split('');

        for (var j=0; j<=kataArr2.length-1; j++){
            for (var k=j+1; k<=kataArr2.length-1; k++){
                if (kataArr2[k]===kataArr2[j] && kataArr2!==tempHurufSudahKeluar){
                    tempHurufSudahKeluar = kataArr2;
                    count += 2;
                }
            }
        }
    
        arrTemp.push(count);
        count = 0;
        tempHurufSudahKeluar = '';
        var index = arrTemp.indexOf(Math.max.apply(null, arrTemp));
    }

    return kataArr[index];
  }
  
  // TEST CASES
 // console.log(hitungHuruf('everwww eevrwww')); 
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau