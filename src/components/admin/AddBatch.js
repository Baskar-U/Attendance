import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

function AddBatch() {
  const [batchName, setBatchName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Batch "${batchName}" has been created.`);
    setBatchName('');
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
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Create New Batch
        </Typography>
        <Box mb={2}>
          <TextField
            label="Batch Name"
            variant="outlined"
            fullWidth
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!batchName.trim()}
        >
          Add Batch
        </Button>
      </form>
    </Paper>
  );
}

export default AddBatch;
