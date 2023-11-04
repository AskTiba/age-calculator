// import { useContext, useState } from "react";
import icon from "../assets/icon-arrow.svg";

const Button = () => {
  // const { year, month, day } = useContext(resultContext);
  const handleCalculate = () => {
    const inputDate: Date = new Date(year, month - 1, day); // Note: month is 0-based (0 = January, 11 = December)
    const currentDate: Date = new Date();
    const difference: number = Math.floor(
      (currentDate.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24)
    ); // Difference in days

    const years: number = Math.floor(difference / 365);
    const months: number = Math.floor((difference % 365) / 30);
    const days: number = difference % 30;

    const result: string = `Years: ${years}, Months: ${months}, Days: ${days}`;
    console.log(result);
  };

  return (
    <div className="flex items-center px-[50px]">
      <hr className="border border-Light-grey w-[570px]" />
      <button className="" onClick={handleCalculate}>
        <img className="bg-Purple rounded-full p-[12px]" src={icon} alt="" />
      </button>
    </div>
  );
};

export default Button;
