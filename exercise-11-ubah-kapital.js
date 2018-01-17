/*Problem
Diberikan function ubahKapital(kalimat) yang menerima satu parameter berupa string. 
Function akan me-return nilai berupa kalimat dimana setiap kata dimulai dengan huruf besar. 
Contoh, jika input adalah "saya makan sushi", maka output adalah "Saya Makan Sushi". */

function ubahKapital(kalimat) {
    var kalimatArr = kalimat.split('');
    var newArr = [];

    for (var i=0; i<=kalimat.length-1; i++){
        if(i===0){
            newArr.push(kalimat[i].toUpperCase());
        }else if(kalimat[i]===' '){
            newArr.push(' '+kalimat[i+1].toUpperCase());
            i++;
        }else{
            newArr.push(kalimat[i].toLowerCase());
        }
    }

    return newArr.join('');
  }
  
  // TEST CASES
  console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
  console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
  console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
  console.log(ubahKapital('i have a dream')); // I Have A Dream
  console.log(ubahKapital('coding is fun')); // Coding Is Fun