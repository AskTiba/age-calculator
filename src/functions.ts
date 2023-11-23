// export const isLeapYear = (year) => {
//   // Check if the year is divisible by 4
//   const divisibleBy4 = year % 4 === 0;

//   // Check if the year is divisible by 100
//   const divisibleBy100 = year % 100 === 0;

//   // Check if the year is divisible by 400
//   const divisibleBy400 = year % 400 === 0;

//   // Determine if it's a leap year based on the conditions
//   if ((divisibleBy4 && !divisibleBy100) || divisibleBy400) {
//     return true; // It's a leap year
//   } else {
//     return false; // It's not a leap year
//   }
// };


export const isLeapYear = (year:number) => {
    if (Number(year).toString().slice(-2) === "00"){
        if (Number(year) % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }else if (Number(year) % 4 === 0) {
        return true;
    }else {
        return false;
    }
};