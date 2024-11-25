import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Typography,
} from '@mui/material';

function ViewAttendance() {
  const attendanceData = [
    { name: 'Bella', present: 10, absent: 2, onDuty: 1 },
    { name: 'Felix', present: 8, absent: 4, onDuty: 1 },
    // Add more rows as needed
  ];

  return (
    <Box sx={{ padding: 3 }}>
      {/* Date Selection */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 3,
          gap: 2,
        }}
      >
        <Typography variant="h6">Select Date:</Typography>
        <TextField
          type="date"
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      {/* Attendance Table */}
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="center"><strong>Present</strong></TableCell>
              <TableCell align="center"><strong>Absent</strong></TableCell>
              <TableCell align="center"><strong>On-Duty</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((student) => (
              <TableRow key={student.name}>
                <TableCell>{student.name}</TableCell>
                <TableCell align="center">{student.present}</TableCell>
                <TableCell align="center">{student.absent}</TableCell>
                <TableCell align="center">{student.onDuty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ViewAttendance;
