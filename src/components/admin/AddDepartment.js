import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

function AddDepartment() {
  const [batch, setBatch] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [facultyIncharge, setFacultyIncharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Department "${departmentName}" for batch "${batch}" has been created with ${facultyIncharge} as the incharge.`
    );
    setBatch('');
    setDepartmentName('');
    setFacultyIncharge('');
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        maxWidth: '500px',
        margin: '50px auto',
        textAlign: 'center',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Create Department
        </Typography>
        <Box mb={2}>
          <TextField
            label="Batch"
            variant="outlined"
            fullWidth
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Department Name"
            variant="outlined"
            fullWidth
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Faculty Incharge"
            variant="outlined"
            fullWidth
            value={facultyIncharge}
            onChange={(e) => setFacultyIncharge(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!batch.trim() || !departmentName.trim() || !facultyIncharge.trim()}
        >
          Add Department
        </Button>
      </form>
    </Paper>
  );
}

export default AddDepartment;
