import RotatingText from "../molecules/RotatingText";

const OurStorySection = () => {
  return (
    <section className="px-[2rem] w-full  ">
      <h3 className="text-white text-4xl font-recoleta-medium mb-4">
        Our Story
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
        <div className="flex flex-col items-start" >
            <p className="text-base font-satoshi font-medium text-[#FFFFFF70]">
            Our extensive network of candidates ensures you have access to the
            best talent available.
            </p>
            <RotatingText />
        </div>
        <div className="mr-2" >
          <p className="text-base font-satoshi font-medium text-[#FFFFFF] mb-3">
            Looking to build a winning team? At Talent. we help businesses find
            the right talent to take their team to the next level. Our expert
            screening and network help identify top talent to fit your specific
            needs and culture. Whether you need front-end developers, full-stack
            engineers, or other specialized roles, we have the expertise to help
            you find the perfect match.dates ensures you have access to the best
            talent available.
          </p>
          <p className="text-base font-satoshi font-medium text-[#FFFFFF] ">
            Our services are designed to take the hassle out of the hiring
            process, so you can focus on running your business. We work with you
            to understand your needs and provide customized solutions to meet
            them. Our commitment to quality means that we stand behind our
            services and offer a guarantee to ensure you get the right talent
            for your team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
