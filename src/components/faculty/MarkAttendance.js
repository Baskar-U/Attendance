import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Paper,
} from '@mui/material';

function MarkAttendance() {
  const students = ["Bella", "Felix", "Edward", "Renesme"];
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState('');
  const [workingStatus, setWorkingStatus] = useState('working');

  const handleAttendanceChange = (student, hour, status) => {
    setAttendance((prev) => ({
      ...prev,
      [student]: { ...prev[student], [hour]: status },
    }));
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Date and Working Status Selection */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          marginBottom: 3,
        }}
      >
        <TextField
          label="Select Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          size="small"
        />
        <FormControl variant="outlined" size="small">
          <InputLabel>Working/Holiday</InputLabel>
          <Select
            value={workingStatus}
            onChange={(e) => setWorkingStatus(e.target.value)}
            label="Working/Holiday"
          >
            <MenuItem value="working">Working</MenuItem>
            <MenuItem value="holiday">Holiday</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Attendance Table */}
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              {[1, 2, 3, 4].map((hour) => (
                <TableCell key={hour} align="center"><strong>Hour {hour}</strong></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student}>
                <TableCell>{student}</TableCell>
                {[1, 2, 3, 4].map((hour) => (
                  <TableCell key={hour} align="center">
                    <FormControl size="small" sx={{ minWidth: 80 }}>
                      <Select
                        value={attendance[student]?.[hour] || ''}
                        onChange={(e) =>
                          handleAttendanceChange(student, hour, e.target.value)
                        }
                        displayEmpty
                      >
                        <MenuItem value="" disabled>Select</MenuItem>
                        <MenuItem value="P">P</MenuItem>
                        <MenuItem value="A">A</MenuItem>
                        <MenuItem value="OD">OD</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MarkAttendance;
