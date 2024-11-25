import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

function AddFaculty() {
  const handleFileUpload = (e) => {
    alert('Faculty data uploaded successfully');
    e.target.value = null; // Reset file input
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        maxWidth: '400px',
        margin: '50px auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Faculty
      </Typography>
      <Box>
        <Button
          variant="contained"
          component="label"
          color="primary"
          style={{ marginBottom: '20px' }}
        >
          Upload File
          <input
            type="file"
            hidden
            onChange={handleFileUpload}
            accept=".csv,.xlsx,.xls"
          />
        </Button>
      </Box>
    </Paper>
  );
}

export default AddFaculty;
