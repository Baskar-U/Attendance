import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';

function AddSemester() {
  const [semester, setSemester] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Semester "${semester}" added to batch "${batch}".`);
    setSemester('');
    setBatch('');
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        maxWidth: '400px',
        margin: '50px auto',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Semester
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            label="Batch"
            variant="outlined"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            label="Semester"
            variant="outlined"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Add Semester
        </Button>
      </form>
    </Paper>
  );
}

export default AddSemester;
