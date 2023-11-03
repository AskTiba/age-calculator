import { useState } from 'react'

import './App.css'

function App() {
  const [day, setDay] = useState('DD');
  const [month, setMonth] = useState('MM');
  const [year, setYear] = useState('YYYY');

  const handleDayChange = (e:string) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e:string) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e: string) => {
    setYear(e.target.value);
  };
  return (
    <>
      <div className='flex gap-y-px '>
        <div className="flex flex-col">
          <label htmlFor="">Day</label>
          <input
            type="text"
            placeholder="DD"
            value={day}
            onChange={handleDayChange}
          />
        </div>

        <div className='flex flex-col'>
        <label htmlFor="">Month</label>
          <input
            type="text"
            placeholder="MM"
            value={month}
            onChange={handleMonthChange}
          />
        </div>

        <div className="flex flex-col">
        <label htmlFor="">Year</label>
          <input
            type="text"
            placeholder="YYYY"
            value={year}
            onChange={handleYearChange}
                />
        </div>
      </div>
    </>
  )
}

export default App
