import Button from "./components/Button";
import DateInput from "./components/DateInput";
import Results from "./components/Results";

function App() {
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
          <DateInput />
          <Button />
          <Results />
        </div>
      </div>
    </>
  );
}

export default App;
