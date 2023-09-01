import { Header } from "./components/Header";
import img from "./components/asset/hero.png";

function App() {
  return (
    <div className="relative min-h-[100svh] w-screen bg-primary text-secondary flex flex-col items-center">
      <Header />
      <div className="w-[min(95%,1000px)] px-4 md:px-0">
        <main className="flex w-full min-h-[calc(100svh-100px)] bg-[url(./components/asset/hero.png)] bg-cover bg-center bg-no-repeat">
          <div className="flex md:flex-row flex-col md:justify-between justify-center items-center w-full backdrop-blur-[3px]">
            <div className="flex flex-col w-full md:w-6/12">
              <h1 className="md:text-4xl text-2xl font-medium font-cinzel">
                Favour
                <br />{" "}
                <span className="md:text-6xl text-4xl font-bold">
                  Agwegiokhe
                </span>
              </h1>
              <h2 className="font-cinzel md:text-5xl font-regular">
                Graphic Designer
              </h2>
              <div className="flex justify-between items-center md:w-sm w-full mt-20">
                <button className="button border border-secondary px-3 md:px-10">
                  Resume
                </button>
                <button className="button border border-secondary px-3 md:px-10">
                  Portfolio
                </button>
              </div>
            </div>
            <div className="md:flex hidden justify-center items-center h-full w-[50%]">
              <img className="" src={img} width={"100%"} height={"100%"} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
