import Container from "./Container/Container";
export default function Tutorial({ bobSrc, title, updateStepper }) {
  return (
    <div
      className="p-6 flex flex-col h-screen justify-between items-center fadeIn"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <h1
        className="text-md text-center"
        style={{
          color: "#707070",
        }}
      >
        {title}
      </h1>
      <img src={bobSrc} className="absolute left-0 top-40" alt="" />
      <button
        className="bg-green-500 text-white font-bold hover:bg-green-600 w-full rounded-3xl py-2 transition-colors"
        onClick={() => updateStepper()}
      >
        Próximo
      </button>
    </div>
  );
}
