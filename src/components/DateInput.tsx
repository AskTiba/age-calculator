import { useState } from "react";

const DateInput = () => {
  const [day, setDay] = useState<number | undefined>();
  const [month, setMonth] = useState<number | undefined>();
  const [year, setYear] = useState<number | undefined>();

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseFloat(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(parseFloat(e.target.value));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseFloat(e.target.value));
  };
  return (
    <div className="mt-[50px] px-[50px]">
      <div className="flex gap-x-[30px] ">
        <div className="flex flex-col">
          <label
            className="font-[800] text-[12px] text-Smokey-grey tracking-[3px] mb-[4px]"
            htmlFor=""
          >
            DAY
          </label>
          <input
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
            htmlFor=""
          >
            MONTH
          </label>
          <input
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer"
            type="text"
            placeholder="MM"
            value={month}
            onChange={handleMonthChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="font-[800] text-[12px] text-Smokey-grey tracking-[3px] mb-[4px]"
            htmlFor=""
          >
            YEAR
          </label>
          <input
            className="h-[50px] w-[150px] rounded-[4px] p-5 text-[32px] font-extrabold
            border border-Light-grey hover:border-Smokey-grey cursor-pointer"
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
