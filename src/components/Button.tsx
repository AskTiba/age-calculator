import { useContext } from "react";
import { AgeContext, DateContext } from "../App";
import icon from "../assets/icon-arrow.svg";
import { isLeapYear } from "../functions";
import { monthsAndDays } from "../constants";

interface ChildProps {
  dataWithErrorHandler: {
    dateErrors: {
      year: string;
      month: string;
      day: string;
      generic: string;
    };
    setDateErrors: React.Dispatch<
      React.SetStateAction<{
        year: string;
        month: string;
        day: string;
        generic: string;
      }>
    >;
  };
  hasErrors: boolean;
}

const Button: React.FC<ChildProps> = ({ dataWithErrorHandler, hasErrors }) => {
  const { dateErrors, setDateErrors } = dataWithErrorHandler;
  const { date } = useContext(DateContext);
  const { setAge } = useContext(AgeContext);

  const handleCalculate = () => {
    const { day, month, year } = date;
    const inputDate = new Date(year, month - 1, day); // Note: month is 0-based (0 = January, 11 = December)
    const currentDate = new Date();
    // const cyear = currentDate.getFullYear();
    // const cmonth = currentDate.getMonth() + 1;
    // const cday = currentDate.getDate();
    const difference = Math.floor(
      (currentDate - inputDate) / (1000 * 60 * 60 * 24)
    ); // Difference in days

    const years = Math.floor(difference / 365);
    const months = Math.floor((difference % 365) / 30);
    const days = difference % 30;

    const currentMonth = monthsAndDays.find((item) => item.month === month);

    const validateDaysForFeb = () => {
      if (month === 2) {
        let maxDays;

        if (isLeapYear(year)) {
          maxDays = currentMonth?.days?.leap || 29; // Leap year February has 29 days
        } else {
          maxDays = currentMonth?.days?.common || 28; // Common year February has 28 days
        }

        if (day <= maxDays) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    };

    const isDayInputValid =
      day >= 1 &&
      ((month !== 2 && day <= (currentMonth?.days || 31)) ||
        validateDaysForFeb());

    const ageData = { years, months, days };
    setAge(ageData);

    const result = `Years: ${years}, Months: ${months}, Days: ${days}`;
    console.log(result);

    const isMonthInputValid = month >= 1 && month <= 12;

    const isYearInputValid = year > 1 && year <= currentDate.getFullYear();

    const isPastDate = currentDate - inputDate < 0;

    if (!day) {
      setDateErrors((prevState) => ({
        ...prevState,
        day: "This field is required",
        month: dateErrors.month && isMonthInputValid ? "" : prevState.month,
        year: dateErrors.year && isYearInputValid ? "" : prevState.year,
      }));
    }

    if (!month) {
      setDateErrors((prevState) => ({
        ...prevState,
        day: dateErrors.day && isDayInputValid ? "" : prevState.day,
        month: "This field is required",
        year: dateErrors.year && isYearInputValid ? "" : prevState.year,
      }));
    }

    if (!year) {
      setDateErrors((prevState) => ({
        ...prevState,
        day: dateErrors.day && isDayInputValid ? "" : prevState.day,
        month: dateErrors.month && isMonthInputValid ? "" : prevState.month,
        year: "This field is required",
      }));
    }

    const isPrecheckValid =
      isDayInputValid && isMonthInputValid && isYearInputValid;

    if (!isPrecheckValid) {
      console.log(isDayInputValid, isMonthInputValid, isYearInputValid);

      if (!isDayInputValid && day) {
        setDateErrors((prevState) => ({
          day: "Must be a valid date",
          month: dateErrors.month && isMonthInputValid ? "" : prevState.month,
          year: dateErrors.year && isYearInputValid ? "" : prevState.year,
          generic: "",
        }));
      }

      if (!isMonthInputValid && month) {
        setDateErrors((prevState) => ({
          day: dateErrors.day && isDayInputValid ? "" : prevState.day,
          month: "Must be a valid month",
          year: dateErrors.year && isYearInputValid ? "" : prevState.year,
          generic: "",
        }));
      }

      if (!isYearInputValid && year) {
        setDateErrors((prevState) => ({
          day: dateErrors.day && isDayInputValid ? "" : prevState.day,
          month: dateErrors.month && isMonthInputValid ? "" : prevState.month,
          year: "Must be in the past",
          generic: "",
        }));
      }
    } else if (isPrecheckValid && isPastDate) {
      setDateErrors(() => ({
        day: "",
        month: "",
        year: "",
        generic: "Must be in the past",
      }));
    } else {
      if (hasErrors) {
        setDateErrors({
          day: "",
          month: "",
          year: "",
          generic: "",
        });
      } 

      setDateErrors(() => ({
        day: "",
        month: "",
        year: "",
        generic: "",
      }));
    }
  };

  return (
    <div className="flex items-center px-[50px]">
      <hr className="border border-Light-grey w-[570px]" />
      <button className="" onClick={handleCalculate}>
        <img
          className="bg-Purple rounded-full p-[12px] hover:bg-[--Off-black]"
          src={icon}
          alt=""
        />
      </button>
    </div>
  );
};

export default Button;
