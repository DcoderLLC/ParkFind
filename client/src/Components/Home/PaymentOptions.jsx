import { Box, Grid, Typography } from '@mui/material';
import { FaMobileAlt, FaPercent, FaCreditCard } from 'react-icons/fa';

const PaymentOptions = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8, backgroundColor: '#f7f7f5' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'gray.800', mb: 4 }}>
        Experience the smarter way to pay
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        
        {/* Left Section with Image */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="path/to/shopping-image.jpg" // Replace with actual image path
              alt="Shopping"
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Grid>
        
        {/* Right Section with Icons and Text */}
        <Grid item xs={12} sm={6} sx={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'gray.800' }}>
            Postpaid <span style={{ color: '#6ee7b7', fontSize: '0.85em' }}>Trusted by 40 lakh+ users</span>
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2, color: 'gray.700' }}>
            Buy now, pay later for all spends once a month
          </Typography>

          {/* Features Section */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4} className="flex flex-col items-center">
              <FaMobileAlt size={30} color="#6ee7b7" />
              <Typography variant="body2" sx={{ color: 'gray.500', mt: 1 }}>
                Buy now, pay after 30 days
              </Typography>
            </Grid>
            <Grid item xs={4} className="flex flex-col items-center">
              <FaPercent size={30} color="#6ee7b7" />
              <Typography variant="body2" sx={{ color: 'gray.500', mt: 1 }}>
                Shop across 20,000 apps
              </Typography>
            </Grid>
            <Grid item xs={4} className="flex flex-col items-center">
              <FaCreditCard size={30} color="#6ee7b7" />
              <Typography variant="body2" sx={{ color: 'gray.500', mt: 1 }}>
                Credit limit up to ₹100,000
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Insurance Section */}
      <Box sx={{ mt: 8, textAlign: 'left' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'gray.800' }}>
          Insurance
        </Typography>
        <Typography variant="body1" sx={{ color: 'gray.700', mt: 1 }}>
          Effective insurances for all your risks
        </Typography>
        <Typography variant="body2" sx={{ color: '#6ee7b7', mt: 1, cursor: 'pointer' }}>
          Explore more on the Ola app →
        </Typography>

        {/* Insurance Options */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: '#f2f2f2', p: 2, borderRadius: '8px' }}>
              <Typography variant="body2" sx={{ color: 'gray.700', fontWeight: 'bold' }}>
                Ride insurance for all your trips
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: '#e0e7ff', p: 2, borderRadius: '8px' }}>
              <Typography variant="body2" sx={{ color: 'gray.700', fontWeight: 'bold' }}>
                Insure your daily assets
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: '#e5f3e5', p: 2, borderRadius: '8px' }}>
              <Typography variant="body2" sx={{ color: 'gray.700', fontWeight: 'bold' }}>
                Daily Hospicash, Super top up
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray.500', fontWeight: 'bold', mt: 1 }}>
                + Much more
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PaymentOptions;
