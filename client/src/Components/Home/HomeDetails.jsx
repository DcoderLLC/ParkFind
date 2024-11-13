// Import necessary libraries
// import React from 'react';
import { Box } from "@mui/material";
// import { DirectionsBus, Luggage, AccessTime } from '@mui/icons-material';

import { FaCity, FaChartLine, FaBolt } from "react-icons/fa";

const HomeDetails = () => {
  return (
    <Box>
      <div className="flex flex-col items-center px-4 py-12 bg-white md:px-16">
        {/* Main Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-3xl">
          Global mobility ecosystem driving communities forward
        </h2>

        {/* Stats Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Stat 1 - Cities covered */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-4">
              <FaCity className="text-4xl text-[#0FC774]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">250+</h3>
            <p className="font-medium text-gray-600 text-center">
              Cities covered
            </p>
            <p className="text-gray-500 text-center text-sm">
              Across India, Australia, New Zealand and the UK
            </p>
          </div>

          {/* Stat 2 - Yearly rides */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-4">
              <FaChartLine className="text-4xl text-[#0FC774]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              55 Cr+
            </h3>
            <p className="font-medium text-gray-600 text-center">
              Yearly rides
            </p>
            <p className="text-gray-500 text-center text-sm">
              Booked by our customers every year
            </p>
          </div>

          {/* Stat 3 - Kilometers on S1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-4">
              <FaBolt className="text-4xl text-[#0FC774]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              12 Cr+
            </h3>
            <p className="font-medium text-gray-600 text-center">
              Kilometers on S1
            </p>
            <p className="text-gray-500 text-center text-sm">
              Distance covered on Ola S1 scooters within a year of launch
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HomeDetails;
