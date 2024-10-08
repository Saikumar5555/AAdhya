import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { StreamlinedExperience } from "./components/streamlined-experience";
import ErrorBoundary from "./components/ErrorBoundary";
import NetworkComponent from "./components/NetworkComponent";

const App = () => {
  return (
    

    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <ErrorBoundary>
      <StreamlinedExperience />
      </ErrorBoundary>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        {/* <NetworkComponent /> */}
        {/* <Services /> */}
        {/* <Pricing /> */}
        <Roadmap />
        <Footer />
        
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;


