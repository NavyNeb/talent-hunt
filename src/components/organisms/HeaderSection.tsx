import Button from "../atoms/Button";
import Reveal from "../atoms/Reveal";
import TeamSection from "../molecules/TeamsSection";

const HeaderSection = () => {
  return (
    <div className="w-full">
      <div className="container px-[2rem] mr-6 mb-8 flex flex-col items-start justify-center gap-y-2.5 md:space-x-5 md:flex-row md:justify-between">
        <Reveal>
          <h1 className="w-full md:w-auto lg:w-[40%] text-4xl leading-12 font-recoleta-medium">
            Looking for the <span className="text-secondary">Right talent</span>{" "}
            for your team?
          </h1>
        </Reveal>
        {/* <Reveal> */}
          <div className="w-full md:w-[70%] lg:w-[40%]">
            <p className="text-base text-[#FFFFFF60] mb-5 font-recoleta-regular pr-1.5">
              Discover top talent for your team with our developer matchmaking
              services. We identify the perfect fit to take the stress out of
              hiring. Build a winning team today.
            </p>
            <Button title="Build your Team" />
          </div>
        {/* </Reveal> */}
      </div>
      <TeamSection />
    </div>
  );
};

export default HeaderSection;
