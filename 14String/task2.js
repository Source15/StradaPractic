function checkSpam(str){
  let lowerStr = str.toLowerCase();//приводим у нижнему регистру
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");//возврашает true если найдено такое 
}

console.log(checkSpam('VIAGRA'));
console.log(checkSpam('XXX'));
console.log(checkSpam('Mops'));