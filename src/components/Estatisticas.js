import { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";

export default function Estatisticas({ setRoute }) {
  const [meditations, setMeditations] = useState(0);
  const [timeMeditating, setTimeMeditating] = useState(0);
  const [mostMeditated, setMostMeditated] = useState("Nenhum");

  useEffect(() => {
    const objectivesArr = JSON.parse(localStorage.getItem("objectives")) || [];

    const cleanedObjectivesArr = objectivesArr.filter((item) => item.objective);

    setMeditations(cleanedObjectivesArr.length);

    let timeMeditating = 0;
    objectivesArr.map((item) => {
      if (item.objective) {
        timeMeditating += 60;
        return;
      }
      timeMeditating += item.time;
    });
    setTimeMeditating(timeMeditating.toFixed());

    const valuesObj = {};
    Object.values(cleanedObjectivesArr).map((item) => {
      const value = item.objective;
      if (Object.keys(valuesObj).includes(value)) {
        valuesObj[value]++;
      } else {
        valuesObj[value] = 1;
      }
    });
    let mostMeditated = "";
    let mostMeditatedCount = 0;
    Object.entries(valuesObj).map(([key, value]) => {
      console.log(key, value);
      if (value > mostMeditatedCount) {
        mostMeditated = key;
        mostMeditatedCount = value;
      }
    });
    setMostMeditated(mostMeditated);
  }, []);

  return (
    <div
      className="p-6 flex flex-col h-screen items-center"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="flex items-center justify-between w-full ">
        <BsChevronLeft
          cursor={"pointer"}
          onClick={() => {
            setRoute("objetivos");
          }}
        />
        <h1 className="text-md font-bold" style={{ color: "#707070" }}>
          Estatísticas
        </h1>
        <div />
      </div>
      <div className="my-5 w-full">
        <div className="shadow-lg rounded-3xl flex items-center justify-center p-4 border  mb-6 bg-slate-100 w-full">
          <div className="flex flex-col" style={{ color: "#707070" }}>
            <p className="text-md font-bold text-center">
              Meditações realizadas
            </p>
            <p className="text-3xl font-bold text-center">{meditations}</p>
          </div>
        </div>
      </div>

      <div className="mb-5 w-full">
        <div className="shadow-lg rounded-3xl flex items-center justify-center p-4 border  mb-6 bg-slate-100 w-full">
          <div className="flex flex-col" style={{ color: "#707070" }}>
            <p className="text-md font-bold text-center">
              Tempo total meditando
            </p>
            <p className="text-3xl font-bold text-center">
              {timeMeditating} sec.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5 w-full">
        <div className="shadow-lg rounded-3xl flex items-center justify-center p-4 border  mb-6 bg-slate-100 w-full">
          <div className="flex flex-col" style={{ color: "#707070" }}>
            <p className="text-md font-bold text-center">
              Objetivo mais utilizado
            </p>
            <p className="text-3xl font-bold text-center">
              {mostMeditated || "Nenhum"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
