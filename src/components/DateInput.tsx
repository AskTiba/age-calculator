import React, { useContext, ChangeEvent } from "react";
import { DateContext } from "../App";

const DateInput: React.FC = () => {
  const { date, setDate } = useContext(DateContext);

  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newDay = parseFloat(e.target.value);
    setDate({ ...date, day: newDay });
  };

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMonth = parseFloat(e.target.value);
    setDate({ ...date, month: newMonth });
  };

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newYear = parseFloat(e.target.value);
    setDate({ ...date, year: newYear });
  };

  const { day, month, year } = date;

  console.log(date);

  return (
    <div className="mt-[50px] px-[50px]">
      <div className="flex gap-x-[30px] ">
        <div className="flex flex-col">
          <label
            className="font-[800] text-[12px] text-Smokey-grey tracking-[3px] mb-[4px]"
            htmlFor="day-input"
          >
            DAY
          </label>
          <input
            id="day-input"
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer "
            type="text"
            placeholder="DD"
            value={day}
            onChange={handleDayChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-[800] text-[12px] text-Smokey-grey tracking-[3px] mb-[4px]"
            htmlFor="month-input"
          >
            MONTH
          </label>
          <input
            id="month-input"
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer "
            type="text"
            placeholder="MM"
            value={month}
            onChange={handleMonthChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-[800] text-[12px] text-Smokey-grey tracking-[3px] mb-[4px]"
            htmlFor="year-input"
          >
            YEAR
          </label>
          <input
            id="year-input"
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer tracking-[2.5px]"
            type="text"
            placeholder="YYYY"
            value={year}
            onChange={handleYearChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DateInput;
