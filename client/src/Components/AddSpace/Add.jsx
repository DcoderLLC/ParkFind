import { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const AddParkingSpace = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log('Parking Space Data:', formData);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: 'auto',
        padding: 4,
        backgroundColor: 'white',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" marginBottom={3}>
        Add Parking Space
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Personal Details Section */}
          <Grid item xs={12}>
            <Typography variant="h6">Personal Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              variant="outlined"
              fullWidth
              required
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              name="email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          {/* Address Details Section */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6">Address Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              variant="outlined"
              fullWidth
              required
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              required
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              name="state"
              variant="outlined"
              fullWidth
              required
              value={formData.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Postal Code"
              name="postalCode"
              variant="outlined"
              fullWidth
              required
              value={formData.postalCode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Additional Notes"
              name="notes"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.notes}
              onChange={handleChange}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2,
                background: '#0FC774'
               }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddParkingSpace;
