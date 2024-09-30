import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36
    max-md:pt-36 max-md:pb-32 border-2 border-amber-400"
    >
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1"></h1>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
