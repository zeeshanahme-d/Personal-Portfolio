// components
import WorkSlider from "@/_components/WorkSlider";
import Image from "next/image";


const Work = () => {
  return (
    <div id="work" className="relative h-auto py-32 bg-primary/40 flex items-center">

      {/* circle */}
      <div className="w-[200px] xl:w-[300px] absolute -right-16 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10 overflow-hidden">
        <Image src={'/circles.png'} width={260} height={200} alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto">

        <div className="flex flex-col xl:flex-row gap-x-14">
          {/* text */}
          <div className="text-center flex xl:w-[32vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-12">
              My Work <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              In my 1 years as a web developer in the software engineering industry, I've honed my skills to seamlessly blend creativity with technical expertise. My work is a testament to a commitment to crafting visually appealing and functional websites.
              Explore my portfolio to witness the intersection of innovation and proficiency in web development.
            </p>
          </div>

          {/* slider */}
          <div className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Work;
