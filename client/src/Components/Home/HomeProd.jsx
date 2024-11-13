// import React from 'react'
import { Box } from "@mui/material";
import { FaBusAlt, FaCar, FaClock } from "react-icons/fa";

const HomeProd = () => {
  return (
    <Box>
      <div className="flex flex-col items-center px-4 py-8 bg-gray-50 md:px-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Theres an Spot for everyone
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* For any budget */}
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-md">
            <FaBusAlt className="text-6xl text-[#0FC774] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              For any budget
            </h3>
            <p className="text-gray-600 text-center">
              From <strong>Bikes</strong> and <strong>Autos</strong> to{" "}
              <strong>Prime Sedans</strong> and <strong>Prime SUVs</strong>, you
              will find a ride in your budget at your convenience any time.
            </p>
          </div>

          {/* For any distance */}
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-md">
            <FaCar className="text-6xl text-[#0FC774] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              For any distance
            </h3>
            <p className="text-gray-600 text-center">
              Book spot within the city with <strong>Daily</strong>, or book a
              spot to your favourite destinations outside the city with{" "}
              <strong>Outstation</strong>.
            </p>
          </div>

          {/* For any duration */}
          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-md">
            <FaClock className="text-6xl text-[#0FC774] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              For any duration
            </h3>
            <p className="text-gray-600 text-center">
              Easily plan a day out without having to worry about conveyance
              with an hour-based package from <strong>Rental</strong>.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HomeProd;
