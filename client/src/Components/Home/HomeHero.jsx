import { Box, Button, TextField, Tabs, Tab } from "@mui/material";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import banner from "../../assets/AXLCNH4Z3ZM-HD.jpg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <Box
      className="relative w-full h-[100vh] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${banner})`, // Use the image path correctly
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Text */}
      <h1 className="text-4xl font-bold text-center">
        Moving people, and the world
      </h1>

      {/* Tabs */}
      <Box className="w-full max-w-2xl my-8">
        <Tabs
          value={0}
          className="bg-[#0FC774] text-white rounded-lg"
          indicatorColor="primary"
          textColor="white"
          centered
        >
          <Tab label="Daily" />
          <Tab label="Rental" />
          <Tab label="Outstation" />
        </Tabs>
      </Box>

      {/* Search Section */}
      <Box className="w-full max-w-2xl flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <Box className="flex items-center">
          <FaMapMarkerAlt className="text-green-600 mr-2" />
          <TextField
            placeholder="Current Location"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
          />
        </Box>
        <Link to="/book">
          <Button
            variant="contained"
            color="success"
            startIcon={<AiOutlineSearch />}
            className="ml-4 px-6 font-bold text-white bg-black hover:bg-green-700"
          >
            SEARCH THE SPOT
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeHero;
