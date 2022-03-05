import { useEffect, useState } from "react";
import bob1 from "./assets/bob-tree/bob-01.png";
import bob2 from "./assets/bob-tree/bob-02.png";
import bob3 from "./assets/bob-tree/bob-03.png";
import Estatisticas from "./components/Estatisticas";
import Objective from "./components/Objective";
import Objectives from "./components/Objectives";
import Tutorial from "./components/Tutorial";
function App() {
  const [stepper, setStepper] = useState(0);
  const [route, setRoute] = useState("tutorial");
  const [objective, setObjective] = useState();

  useEffect(() => {
    if (localStorage.getItem("passedTutorial")) {
      setRoute("objetivos");
    }
  }, []);

  const updateStepper = () => {
    if (stepper === 2) {
      localStorage.setItem("passedTutorial", true);
      setRoute("objetivos");
    }
    setStepper(stepper + 1);
  };

  useEffect(() => {
    if (route === "tutorial") {
      setStepper(0);
    }
  }, [route]);

  const tutorial = [
    {
      title: `Seja bem-vindo ao "De Boas", onde você aprende meditação e fica sempre de boas.`,
      image: bob1,
    },
    {
      title: `É divertido e ajudamos você a ficar motivado com recompensas pelo
      seu empenho em ficar "De Boas"`,

      image: bob2,
    },
    {
      title: `Você pode acompanhar sua evolução em ficar "De boas" com as nossas
      estatísticas inteligentes`,
      image: bob3,
    },
  ];

  return (
    <>
      {route === "tutorial" &&
        tutorial.map(
          (item, index) =>
            stepper === index && (
              <Tutorial
                key={item.title}
                bobSrc={item.image}
                title={item.title}
                updateStepper={updateStepper}
              />
            )
        )}
      {route === "objetivos" && (
        <Objectives setRoute={setRoute} setObjective={setObjective} />
      )}
      {route === "objetivo" && (
        <Objective setRoute={setRoute} objective={objective} />
      )}
      {route === "estatisticas" && <Estatisticas setRoute={setRoute} />}
    </>
  );
}

export default App;
