import { useInterval } from "usehooks-ts";
import confetti from "canvas-confetti";
import { useState } from "react";

import { timeLeft } from "./utils";
import { Comida } from "./Comida";

function App() {
  const [time, setTimer] = useState(timeLeft());

  useInterval(() => {
    setTimer(timeLeft());
  }, 1000);

  return (
    <div className="flex flex-col" onClick={() => confetti()}>
      <div className="text-center object-fill flex-1">
        <h1 className="bg-cyan-700 text-7xl p-5 text-white">Agarrense porque faltan: </h1>
      

        <section className="flex justify-center gap-2 p-6">
          <TimeBox unitName="Days" unit={time.days} />
          <TimeBox unitName="Minutes" unit={time.minutes} />
          <TimeBox unitName="Hours" unit={time.hours} />
          <TimeBox unitName="Seconds" unit={time.seconds} />
        </section>

        <p className="text-3xl">
          para el cumple de <span className="text-red-900">Checho</span>.
        </p>
      </div>

      <Comida/>

    </div>
  );
}

const TimeBox = (props: { unitName: string; unit: number }) => {
  return (
    <div className="bg-cyan-800 rounded-lg p-3 md:p-10">
      <h2 className="text-5xl">{props.unit}</h2>
      <p>{props.unitName}</p>
    </div>
  );
};

export default App;
