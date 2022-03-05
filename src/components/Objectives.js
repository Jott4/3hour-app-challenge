import { BsChevronLeft, BsGraphUp } from "react-icons/bs";
import happy from "../assets/bob-faces/happy.png";
import focused from "../assets/bob-faces/focused.png";
import sleepy from "../assets/bob-faces/sleepy.png";
export default function Objectives({ setRoute, setObjective }) {
  const objectives = [
    {
      title: "Ficar de boas",
      description: `relaxar, reduzir 
      ansiedade e o stress`,
      img: happy,
      color: "#FFAEAE",
    },
    {
      title: "Olha a foca!",
      description: `Aumentar o foco`,
      img: focused,
      color: "#E2AEFF",
    },
    {
      title: "Dormir de boas",
      description: `Dormir melhor`,
      img: sleepy,
      color: "#AEF1FF",
    },
  ];
  return (
    <div
      className="p-6 flex flex-col h-screen items-center"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="flex items-center justify-between w-full ">
        <BsChevronLeft
          cursor={"pointer"}
          onClick={() => {
            setRoute("tutorial");
          }}
        />
        <h1 className="text-md font-bold" style={{ color: "#707070" }}>
          Objetivos
        </h1>
        <BsGraphUp
          cursor={"pointer"}
          onClick={() => {
            setRoute("estatisticas");
          }}
        />
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
            <img src={item.img} alt="" />
            <div className="flex flex-col" style={{ color: "#707070" }}>
              <p className="text-md font-bold">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
