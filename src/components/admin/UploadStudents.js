import React from 'react';
import { Typography, Paper, Button, Box } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

function UploadStudents() {
  const handleFileUpload = (e) => {
    alert('Student data uploaded successfully');
    e.target.value = null; // Reset file input after upload
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
        Upload Students
      </Typography>
      <Box marginTop={2}>
        <Button
          variant="contained"
          component="label"
          color="primary"
          startIcon={<CloudUpload />}
        >
          Choose File
          <input
            type="file"
            hidden
            onChange={handleFileUpload}
          />
        </Button>
      </Box>
    </Paper>
  );
}

export default UploadStudents;
