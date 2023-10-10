import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full mt-[100px] justify-center flex  flex-col items-center">
      {/* main */}
      <div className="w-[82%] small:w-[100%] flex flex-col leading-10 small:justify-center small:items-center">
        <div className="text-[40px] w-[60%] medium:w-[90%] medium:text-[36px] small:w-[80%] small:text-[24px] small:text-center flex small:justify-center">
          PlanetScale is the world’s most advanced MySQL platform
        </div>
        <div className="mt-[40px] flex gap-[10px] small:flex-col small:w-[80%]">
          <button className="h-[40px] px-[10px] flex items-center border-[1px] rounded-[20px] justify-center border-[rgb(233,233,233)] text-[black] hover:cursor-pointer hover:border-[1px] hover:border-[#ff6a00e6] transition-all duration-400">
            Get started <BiChevronRight />{" "}
          </button>
          <button className="h-[40px] px-[10px] flex items-center text-[black] hover:cursor-pointer justify-center">
            Schedule a demo <BiChevronRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
