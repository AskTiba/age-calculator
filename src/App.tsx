import Button from "./components/Button";
import DateInput from "./components/DateInput";
import Results from "./components/Results";
import { createContext, useState } from "react";

export const DateContext = createContext({});
export const AgeContext = createContext({ years: 0, months: 0, days: 0 });

function App() {
  const [date, setDate] = useState({});
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
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
              <DateInput />
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
