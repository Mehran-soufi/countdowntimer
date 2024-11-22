import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import CounterBox from "./CounterBox";
import Title from "./Title";

function App() {
  const [status, setStatus] = useState("reset"); // Initial state
  const [start, setStart] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Timer logic
  useEffect(() => {
    let timer;
    if (start && status === "running") {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((prev) => prev - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (days > 0) {
          setDays((prev) => prev - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        } else {
          clearInterval(timer);
          setStart(false);
          setStatus("reset");
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);
    }
    if (status === "stop") {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [start, seconds, minutes, hours, days, status]);

  const getTimerDisplay = () => {
    if (status === "reset") {
      return "Set the Timer"; // Before start
    } else if (status === "running") {
      return "Timer Running"; // While running
    } else if (status === "stop") {
      return "Timer Stopped"; // When stopped
    } else {
      return "Timer Reset"; // When reset
    }
  };

  

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-gradient-to-br to-slate-900 from-gray-800">
      <Title />
      <h2 className="text-white text-xl mb-4">{getTimerDisplay()}</h2>
      <CounterBox
        days={days}
        setDays={setDays}
        hours={hours}
        setHours={setHours}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        start={start}
      />
      <Buttons
        status={status}
        setStatus={setStatus}
        setStart={setStart}
        start={start}
        setDays={setDays}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  );
}

export default App;
