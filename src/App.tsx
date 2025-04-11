import Sandwich from "@/components/atoms/Sandwich";
import "./App.css";
import Header from "@/components/organisms/header/Header";
import Hero from "@/components/organisms/Hero";
import FeatureCard from "./components/organisms/features/FeatureCard";
import SectionTitle from "./components/atoms/SectionTitle";
import Features from "./components/organisms/features/Features";
import IntermediateLine from "./components/atoms/IntermediateLine";
import StepCard from "./components/organisms/getStarted/StepCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sandwich />
      <Features />
      <IntermediateLine />
      <StepCard />
    </>
  );
}

export default App;
