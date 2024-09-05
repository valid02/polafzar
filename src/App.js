import FactsSection from "./components/layout/FactsSection";
import FeaturesSection from "./components/layout/FeaturesSection";
import Header from "./components/layout/Header";
import WelcomeSection from "./components/layout/WelcomeSection";

const App = () => {
  return (
    <>
      <Header />
      <WelcomeSection />
      <FactsSection />
      <FeaturesSection />
    </>
  );
}

export default App;
