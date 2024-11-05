import FactsSection from "../components/layout/FactsSection";
import FeaturesSection from "../components/layout/FeaturesSection";
import MainHeader from "../components/layout/Header/MainHeader";
import WelcomeSection from "../components/layout/WelcomeSection";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <WelcomeSection />
      <FactsSection />
      <FeaturesSection />
    </>
  );
}
 
export default HomePage;