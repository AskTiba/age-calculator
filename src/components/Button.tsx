import { useContext } from "react";
import { AgeContext, DateContext } from "../App"; // Import your DateContext
import icon from "../assets/icon-arrow.svg";

const Button = () => {
  const { date } = useContext(DateContext);
  const { setAge } = useContext(AgeContext);

  const handleCalculate = () => {
    const { day, month, year } = date;
    const inputDate = new Date(year, month - 1, day); // Note: month is 0-based (0 = January, 11 = December)
    const currentDate = new Date();
    const difference = Math.floor(
      (currentDate - inputDate) / (1000 * 60 * 60 * 24)
    ); // Difference in days

    const years = Math.floor(difference / 365);
    const months = Math.floor((difference % 365) / 30);
    const days = difference % 30;

    const ageData = { years, months, days };
    setAge(ageData); // Store the age data in the AgeContext

    const result = `Years: ${years}, Months: ${months}, Days: ${days}`;
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
