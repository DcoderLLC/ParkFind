import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const Book = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Dummy Space Data List
  const spaces = [
    {
      title: "BackYard",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit In odit",
      price: "$220",
      imageUrl: "",
    },
    {
      title: "Another Space",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: "$180",
      imageUrl:
        "https://images.unsplash.com/photo-1562564055-71e051d83c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "More Space",
      description: "Lorem ipsum dolor sit amet",
      price: "$150",
      imageUrl:
        "https://images.unsplash.com/photo-1556741533-f6acd64738bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  // Function to get user location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (e) => {
          setErrorMessage("Location access denied.");
          console.log(e.message);
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Box className="w-full h-screen">
      <Grid container className="h-full">
        {/* Left Side - Spaces List */}
        <Grid
          item
          xs={12}
          md={6}
          className="flex items-center justify-center bg-gray-100 p-8"
        >
          <Box className="text-left w-full">
            <Typography variant="h4" className="font-bold mb-6 text-center">
              Space Near You
            </Typography>
            <Grid container spacing={4}>
              {spaces.map((space, index) => (
                <Grid item xs={12} key={index}>
                  <Card className="flex max-w-md overflow-hidden rounded-lg shadow-lg">
                    <CardMedia
                      component="div"
                      sx={{ width: "33%", backgroundSize: "cover" }}
                      image={space.imageUrl}
                    />
                    <CardContent sx={{ width: "67%", padding: 2 }}>
                      <Typography
                        variant="h6"
                        component="div"
                        color="text.primary"
                      >
                        {space.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ marginY: 1 }}
                      >
                        {space.description}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        color="text.primary"
                      >
                        {space.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained" sx={{background: '#0FC774'}}>
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Right Side - Map */}
        <Grid item xs={12} md={6} className="relative">
          {location ? (
            <iframe
              title="Google Map"
              className="w-full h-full"
              src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
              allowFullScreen
            ></iframe>
          ) : (
            <Box className="flex items-center justify-center h-full bg-gray-200">
              <Typography variant="h6" color="error">
                {errorMessage || "Loading map..."}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Book;
