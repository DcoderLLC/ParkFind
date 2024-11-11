import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import asset1 from "../../assets/page background.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box>
      <div className="w-full h-auto">
        <img
          className="w-full h-auto"
          width="100%"
          height="auto"
          src={asset1}
        />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-center grid grid-rows-2 justify-utems-center place-content-center p-4">
        <h1
          className={`text-3xl sm:text-5xl font-bold text-white transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          Finding a parking lot? Use our service
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Location"
          className="block  mt-2 w-48 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        />
        <button className="mt-2 ml-1 px-10 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Search
          <FaLongArrowAltRight />
        </button>
      </div>
    </Box>
  );
};

export default HomeHero;
