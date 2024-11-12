import HomeDetails from "../Components/Home/HomeDetails"
import HomeHero from "../Components/Home/HomeHero"
import { Box } from '@mui/material';
import HomeProd from "../Components/Home/HomeProd";
import HomeBlog from "../Components/Home/HomeBlog";

const Home = () => {
  return (
    <Box>
        <HomeHero />
        <HomeDetails />
        <HomeProd />
        <HomeBlog />
    </Box>
  )
}

export default Home