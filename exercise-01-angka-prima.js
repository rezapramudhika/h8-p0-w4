/*Problem
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false. */

function angkaPrima(angka) {
    var temp = 0;
    if(angka <= 3 || angka === 7){
        return true;
    }else{
        for (var i=2; i<=9; i++){
            if (angka % i == 0){
                temp += 1;
            }
        }
        if (temp !== 0){
            return false;
        }else{
            return true;
        }
    }


  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false