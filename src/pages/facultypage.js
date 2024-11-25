import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Header from '../components/Header.js';
import FacultyDetails from '../components/faculty/FacultyDetails.js';
import MarkAttendance from '../components/faculty/MarkAttendance.js';
import ViewAttendance from '../components/faculty/ViewAttendance';
import './facultypage.css';

function FacultyPage() {
  const [view, setView] = useState("mark");

  return (
    <Box sx={{ padding: 3 }}>
      <Header />
      <FacultyDetails />
      
      <Box sx={{ marginTop: 3, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Attendance Options
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color={view === "mark" ? "primary" : "default"}
            onClick={() => setView("mark")}
          >
            Mark Attendance
          </Button>
          <Button
            variant="contained"
            color={view === "view" ? "primary" : "default"}
            onClick={() => setView("view")}
          >
            View Attendance
          </Button>
        </Box>
      </Box>
      
      {view === "mark" ? <MarkAttendance /> : <ViewAttendance />}
    </Box>
  );
}

export default FacultyPage;
