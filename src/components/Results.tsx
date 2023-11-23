import { useContext } from "react";
import { AgeContext } from "../App"; // Import the AgeContext or the relevant context

const Results = () => {
  const { age } = useContext(AgeContext); // Replace AgeContext with the actual context you're using
  console.log(age.year);
  return (
    <div className="flex flex-col gap-x-[10px] px-[50px] text-[80px]  pb-[50px]">
      <p className="">
        <span className="text-Purple ">{age.years || "--"}</span> years
      </p>
      <p className="">
        <span className="text-Purple">{age.months || "--"}</span> months
      </p>
      <p className="">
        <span className="text-Purple">{age.days || "--"}</span> days
      </p>
    </div>
  );
};

export default Results;
