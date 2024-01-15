let beratJ = 64;
let tinggiJ = 1.65;
let beratM = 50;
let tinggiM = 1.68;
const IMT1 = beratM / tinggiM **2;
const IMT2 = beratJ / tinggiJ **2;


console.log("berat joan  : " + beratJ);
console.log("tinggi joan : " + tinggiJ);
console.log("IMT joan :" + IMT2);
console.log("berat madan : " + beratM);
console.log("tinggi madan :" + tinggiM);
console.log("IMT madan :" +IMT1);

var madanHigherIMT = IMT1 > IMT2 ;
console.log(madanHigherIMT);
