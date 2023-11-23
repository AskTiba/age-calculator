import Button from "./components/Button";
import DateInput from "./components/DateInput";
import Results from "./components/Results";
import { createContext, useState } from "react";

export const DateContext = createContext({ year: "", month: "", day: "" });
export const AgeContext = createContext({ year: "", month: "", day: "" });

function App() {
  const [date, setDate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [age, setAge] = useState({ year: "", month: "", day: "" });
  const [dateErrors, setdateErrors] = useState({
    year: "",
    month: "",
    day: "",
    generic: ""
  });

  const hasErrors = dateErrors.year || dateErrors.month || dateErrors.day || dateErrors.generic

  return (
    <>
      <div
        className="bg-Light-grey flex justify-center 
      items-center min-h-screen min-w-full h-[600px]"
      >
        <div
          className="bg-White flex flex-col  
        rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[25%] "
        >
          <DateContext.Provider value={{ date, setDate }}>
            <AgeContext.Provider value={{ age, setAge }}>
              <DateInput hasErrors={hasErrors} dateErrors={dateErrors} />
              <Button />
              <Results />
            </AgeContext.Provider>
          </DateContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
