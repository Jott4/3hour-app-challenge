import { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import MemoHappy from "../assets/bob-faces/Happy";
import Container from "./Container/Container";

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
    // Transformando em min:sec
    const min = Math.floor(timeMeditating / 60);
    const sec = timeMeditating % 60;
    setTimeMeditating(
      `${min}:${sec.toFixed() < 10 ? "0" : ""}${sec.toFixed()}`
    );

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
    <Container>
      <div
        className="p-6 flex flex-col h-screen items-center transition-all fadeIn"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="flex items-center justify-between w-full ">
          <div
            className="p-2 hover:bg-gray-200 rounded-full"
            onClick={() => {
              setRoute("objetivos");
            }}
          >
            <BsChevronLeft cursor={"pointer"} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-md font-bold" style={{ color: "#707070" }}>
              Estatísticas
            </h1>
            <div className="text-6xl">
              <MemoHappy />
            </div>
          </div>
          <div />
        </div>
        <div className="my-2 w-full">
          <div className="shadow-lg rounded-3xl flex items-center justify-center p-4 border  mb-5 bg-slate-100 w-full">
            <div className="flex flex-col" style={{ color: "#707070" }}>
              <p className="text-md font-bold text-center">
                Meditações realizadas
              </p>
              <p className="text-3xl font-bold text-center">{meditations}</p>
            </div>
          </div>
        </div>

        <div className="mb-1 w-full">
          <div className="shadow-lg rounded-3xl flex items-center justify-center p-4 border  mb-5 bg-slate-100 w-full">
            <div className="flex flex-col" style={{ color: "#707070" }}>
              <p className="text-md font-bold text-center">
                Tempo total meditando
              </p>
              <p className="text-3xl font-bold text-center">
                {timeMeditating} min
              </p>
            </div>
          </div>
        </div>

        <div className="mb-1 w-full">
          <div className="shadow-lg rounded-3xl flex items-center justify-center p-4 border  mb-5 bg-slate-100 w-full">
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
    </Container>
  );
}
