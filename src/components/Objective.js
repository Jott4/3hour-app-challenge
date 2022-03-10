import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsPause, BsPlay, BsPlayBtn } from "react-icons/bs";
import meditacao from "../assets/meditacao.mp3";
export default function Objective({ setRoute, objective }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      audioRef?.current?.currentTime &&
        setCurrentTime(audioRef.current.currentTime);
    }, 1000);
  }, []);

  const normalizePercentage = (percentage) => {
    return (100 * percentage) / 60;
  };

  const exit = () => {
    console.log(currentTime);
    const objectivesArr = JSON.parse(localStorage.getItem("objectives")) || [];

    currentTime >= 60
      ? objectivesArr.push({ objective: objective.title })
      : currentTime > 0 && objectivesArr.push({ time: currentTime });

    localStorage.setItem("objectives", JSON.stringify(objectivesArr));
    setRoute("objetivos");
    return;
  };

  return (
    <div
      className="p-6 flex flex-col h-screen items-center"
      style={{ backgroundColor: objective.color }}
    >
      <div className="flex items-center justify-between w-full ">
        <div
          className="p-2 hover:bg-gray-200 rounded-full"
          onClick={() => exit()}
        >
          <BsChevronLeft cursor={"pointer"} />
        </div>
        <h1 className="text-md font-bold" style={{ color: "#707070" }}>
          {objective.title}
        </h1>
        <div />
      </div>
      <div></div>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="text-9xl">{objective.img}</div>
        {/* <img src={objective.img} /> */}
        <audio src={meditacao} ref={audioRef} />
        <div className="w-full">
          <div className="w-full flex justify-between text-sm mb-1">
            <p>
              {"00:" +
                `${
                  currentTime.toFixed() >= 10
                    ? currentTime.toFixed()
                    : "0" + currentTime.toFixed()
                }`}
            </p>
            <p>
              {"00:" +
                `${
                  60 - currentTime.toFixed() >= 10
                    ? 60 - currentTime.toFixed()
                    : "0" + 60 - currentTime.toFixed()
                }`}
            </p>
          </div>
          <div className="w-full bg-white h-3 rounded-3xl">
            <div
              className="flex items-center justify-end bg-gray-700 rounded-3xl h-full"
              style={{ width: normalizePercentage(currentTime) + "%" }}
            ></div>
          </div>
        </div>
        <div
          className="rounded-full border w-10 h-10 flex items-center justify-center bg-gray-100 my-2 m-auto cursor-pointer hover:bg-gray-200"
          onClick={() => {
            if (!isPlaying) {
              audioRef.current.play();
              setIsPlaying(true);
            } else {
              audioRef.current.pause();
              setIsPlaying(false);
            }
          }}
        >
          {isPlaying ? <BsPause size={24} /> : <BsPlay size={24} />}
        </div>
      </div>
    </div>
  );
}
