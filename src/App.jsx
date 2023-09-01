import { Header } from "./components/Header";
import Hero from "./components/Hero";
import hero from "./components/asset/hero.png";
import about from "./components/asset/about.png";
import About from "./components/About";

function App() {
  return (
    <div className="relative min-h-[100svh] bg-primary text-secondary flex flex-col items-center">
      <Header />
      <div className="w-[min(95%,1000px)] px-4 md:px-0">
        <Hero bg={hero} />
        <About about_img={about}/>
      </div>
    </div>
  );
}

export default App;
