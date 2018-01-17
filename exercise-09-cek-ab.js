/*Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat 
karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
Jika tidak ditemukan sama sekali, kembalikan nilai false. */

function checkAB(num) {
    var temp = num.split('');
    var isTrue;
    console.log(temp);
    for(var i=0; i<=temp.length-1; i++){
        if (temp[i]==='a'){
            if (temp[i+4]==='b'){
                isTrue = true;
                break;
            }else{
                isTrue = false;
            }
        }
        if (temp[i]==='b'){
            if (temp[i+4]==='a'){
                isTrue = true;
                break;
            }else{
                isTrue = false;
            }
        }
    }
    return isTrue;
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false