import { useState } from "react";
import { BsChevronLeft, BsGraphUp } from "react-icons/bs";
import MemoChillin from "../assets/bob-faces/Chillin";
import MemoFocused from "../assets/bob-faces/Focused";
import MemoSleppy from "../assets/bob-faces/Sleppy";
import Container from "./Container/Container";
export default function Objectives({ setRoute, setObjective }) {
  const [clicked, setClicked] = useState(false);
  const objectives = [
    {
      title: "Ficar de boas",
      description: `relaxar, reduzir 
      ansiedade e o stress`,
      img: <MemoChillin />,
      color: "#ffd1d1",
    },
    {
      title: "Olha a foca!",
      description: `Aumentar o foco`,
      img: <MemoFocused />,
      color: "#eecfff",
    },
    {
      title: "Dormir de boas",
      description: `Dormir melhor`,
      img: <MemoSleppy />,
      color: "#cff7ff",
    },
  ];

  return (
    <Container>
      <div
        className="p-6 flex flex-col h-screen items-center fadeIn overflow-y-hidden transition-all"
        id="objectives"
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="flex items-center justify-between w-full ">
          <div
            className="p-2 hover:bg-gray-200 rounded-full"
            onClick={() => {
              setRoute("tutorial");
            }}
          >
            <BsChevronLeft cursor={"pointer"} />
          </div>

          <h1 className="text-md font-bold" style={{ color: "#707070" }}>
            Objetivos
          </h1>
          <div
            className="p-2 hover:bg-gray-200 rounded-full"
            onClick={() => {
              setRoute("estatisticas");
            }}
          >
            <BsGraphUp cursor={"pointer"} />
          </div>
        </div>
        <div className="my-6">
          {objectives.map((item) => (
            <div
              className="shadow-lg rounded-3xl flex items-center px-4 py-2 border gap-x-4 mb-6 cursor-pointer hover:bg-slate-200 bg-slate-100 transition-all"
              style={{ borderColor: item.color }}
              key={item.title}
              onClick={() => {
                setRoute("objetivo");
                setObjective(item);
              }}
            >
              <div className="text-7xl mdc-card">{item.img}</div>
              <div className="flex flex-col" style={{ color: "#707070" }}>
                <p className="text-md font-bold">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
