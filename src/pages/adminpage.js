import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddBatch from '../components/admin/AddBatch';
import AddDepartment from '../components/admin/AddDepartment';
import AddFaculty from '../components/admin/AddFaculty';
import UploadStudents from '../components/admin/UploadStudents';
import AddSemester from '../components/admin/AddSemester';
import Header from '../components/Header';
import './Admin.css';

function Admin() {
  const [currentForm, setCurrentForm] = useState('dashboard');

  return (
    <Box sx={{ padding: 3 }}>
      <Header />
      
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 3, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentForm('batch')}
        >
          Create Batch
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentForm('department')}
        >
          Create Department
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentForm('faculty')}
        >
          Add Faculty
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentForm('students')}
        >
          Upload Students
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentForm('semester')}
        >
          Add Semester
        </Button>
      </Box>

      <Box>
        {currentForm === 'batch' && <AddBatch />}
        {currentForm === 'department' && <AddDepartment />}
        {currentForm === 'faculty' && <AddFaculty />}
        {currentForm === 'students' && <UploadStudents />}
        {currentForm === 'semester' && <AddSemester />}
      </Box>
    </Box>
  );
}

export default Admin;
