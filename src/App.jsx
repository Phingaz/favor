import Header from "./components/Header";
import img from "./main.png";

function App() {
  return (
    <div className="relative min-h-[100svh] w-screen bg-primary text-secondary flex flex-col items-center">
      <Header />
      <main className="w-[80%]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-6/12">
            <h1 className="text-6xl font-bold">
              Favour
              <br /> Agwegiokhe
            </h1>
            <h2 className="text-4xl font-semibold">Graphic Designer</h2>
            <div className="flex w-[80%] justify-between items-center mt-20">
              <button className="button border border-secondary">Resume</button>
              <button className="button border border-secondary">
                Portfolio
              </button>
            </div>
          </div>
          <img className="obje" src={img} width={"50%"} />
        </div>
      </main>
    </div>
  );
}

export default App;
