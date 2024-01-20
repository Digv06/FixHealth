import "./App.css";
import ConsultationForm from "./components/ConsultationForm";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection
        title="Empowering Healthcare"
        subtitle="Providing compassionate care for a healthier tomorrow."
        image="\src\assets\hero.png"
      />
      <ConsultationForm />
    </div>
  );
}

export default App;
