module.exports = function toReadable (number) {
   const begining = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const zeroNun = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   //преобразовывает ЧИСЛО в СТРОКУ чисел
   const numberStr = String(number);
   //вырезает ПЕРВЫЙ символ
   const firstNun = numberStr.slice(0, 1);
   //вырезает ВТОРОЙ символ
   const secondNun = numberStr.slice(1, 2);
   //вырезает ТРЕТИЙ символ
   const threeNun = numberStr.slice(2, 3);
   //вырезает во ВТОРОГО по ТРЕТИЙ включительно
   const twoAndThreeNun = numberStr.slice(1, 3);
   //преобразовывает СТРОКУ чисел в массив ЧИСЕЛ
   const nun = Array.from(numberStr, Number);
   if ( number < 20 ) {
      return begining[number];
   } else if ( number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90 ) {
      return zeroNun[firstNun];
   } else if ( number >= 21 && number <= 99 ) {
      return zeroNun[firstNun] + ' ' + begining[secondNun];
   } else if ( number >= 100 ) {
      if ( number === 100 || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900 ) {
         return begining[firstNun] + ' hundred';
      } else if ( nun[1] === 0 ) {
         return begining[firstNun] + ' hundred ' + begining[threeNun];
      } else if ( nun[1] === 1) {
         return begining[firstNun] + ' hundred ' + begining[twoAndThreeNun];
      } else if ( twoAndThreeNun === '20' || twoAndThreeNun === '30' || twoAndThreeNun === '40' || twoAndThreeNun === '50' || twoAndThreeNun === '60' || twoAndThreeNun === '70' || twoAndThreeNun === '80' || twoAndThreeNun === '90' ) {
         return begining[firstNun] + ' hundred ' + zeroNun[secondNun];
      } else if ( nun[1] >= 2 && nun[1] <= 9 ) {
         return begining[firstNun] + ' hundred ' + zeroNun[secondNun] + ' ' + begining[threeNun]; 
      }
   }
}
