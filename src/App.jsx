import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";

const App = () => {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <Faq></Faq>
      <Testimonials></Testimonials>
    </main>
  );
};
export default App;
