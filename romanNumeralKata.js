const LookUpChart = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// get the numbers from the lookup table
const getNumbers = (romanNum) => {
  for (const key in LookUpChart) {
    if (romanNum === key) {
      return LookUpChart[key];
    }
  }
};

const romanNumToNum = (romanNum) => {
  const romanNumArr = romanNum.split("").map((el) => el.toUpperCase());

  // used to store the added vales of roman numerals
  let num = 0;

  // used to check if a higher roman numeral that precede a lower roman numeral
  // is not added to the num again
  let prev = 0;

  romanNumArr.forEach((el, i, arr) => {
    const r1 = getNumbers(arr[i]);

    if (prev === 0) {
      if (i + 1 < arr.length) {
        const r2 = getNumbers(arr[i + 1]);
        if (r1 >= r2) {
          num += r1;
          console.log(num);
        } else {
          num += r2 - r1;
          prev = r2;
        }
      } else {
        num += r1;
      }
    } else {
      prev = 0;
    }
  });
  return num;
};

module.exports = romanNumToNum;
