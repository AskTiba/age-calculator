import React, { useContext, ChangeEvent } from "react";
import { DateContext } from "../App";

interface ChildProps {
  dateErrors: {
    year: string;
    month: string;
    day: string;
    generic: string;
  };
  hasErrors: boolean;
}

const DateInput: React.FC<ChildProps> = ({ dateErrors, hasErrors }) => {
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
            style={{
              color: hasErrors ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)",
            }}
          >
            DAY
          </label>
          <input
            id="day"
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer "
            type="number"
            placeholder="DD"
            value={day}
            style={{
              border: hasErrors
                ? "1px solid hsl(0, 100%, 67%)"
                : "1px solid hsl(0, 0%, 94%)",
            }}
            onChange={handleDayChange}
          />
          {dateErrors.day && <p className="error">{dateErrors.day}</p>}
        </div>
        <div className="flex flex-col">
          <label
            className="font-[800] text-[12px] text-Smokey-grey tracking-[3px] mb-[4px]"
            htmlFor="month"
            style={{
              color: hasErrors ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)",
            }}
          >
            MONTH
          </label>
          <input
            id="month"
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer "
            type="number"
            placeholder="MM"
            value={month}
            style={{
              border: hasErrors
                ? "1px solid hslhsl(0, 100%, 67%)"
                : "1px solid hsl(0, 1%, 94%)",
            }}
            onChange={handleMonthChange}
          />
          {dateErrors.month && <p className="error">{dateErrors.month}</p>}
        </div>
        <div className="flex flex-col">
          <label
            className="font-[800] text-[12px] text-Smokey-grey tracking-[3px] mb-[4px]"
            htmlFor="year-input"
            style={{
              color: hasErrors ? "hsl(0, 100%, 67%)" : "hsl(0, 1%, 44%)",
            }}
          >
            YEAR
          </label>
          <input
            id="year"
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer tracking-[2.5px]"
            type="number"
            placeholder="YYYY"
            value={year}
            style={{
              border: hasErrors
                ? "1px solid hsl(0, 100%, 67%)"
                : "1px solid hsl(0, 0%, 94%)",
            }}
            onChange={handleYearChange}
          />
          {dateErrors.year && <p className="error">{dateErrors.year}</p>}
        </div>
      </div>
      {dateErrors.generic && (
        <p className="error generic">{dateErrors.generic}</p>
      )}
    </div>
  );
};

export default DateInput;
