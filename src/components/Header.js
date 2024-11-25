import React from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ backgroundColor: 'darkblue' }}>
      <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            component="div"
            sx={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}
          >
            Loyola - Icam
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            component="div"
            sx={{ fontFamily: 'Times New Roman', marginTop: 1 }}
          >
            College of Engineering and Technology
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: isMobile ? 2 : 0,
            backgroundColor: '#006699',
            ':hover': { backgroundColor: '#004d66' },
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
