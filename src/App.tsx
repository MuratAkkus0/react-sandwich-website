import Sandwich from "@/components/atoms/Sandwich";
import "./App.css";
import Header from "@/components/organisms/header/Header";
import Hero from "@/components/organisms/Hero";
import Features from "./components/organisms/features/Features";
import IntermediateLine from "./components/atoms/IntermediateLine";
import GetStarted from "./components/organisms/getStarted/GetStarted";
import Feedback from "./components/organisms/feedbacks/Feedback";
import FaqAccordion from "./components/organisms/faqAccordion/FaqAccordion";
import FinalCTA from "./components/organisms/FinalCTA";
import Footer from "./components/organisms/footer/Footer";

function App() {
  return (
    <div className="px-7 space-y-14 container mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Sandwich />
      <Features />
      <IntermediateLine />
      <GetStarted />
      <Feedback />
      <FaqAccordion />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
