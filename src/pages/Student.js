import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ViewAttendance.css';
import Header from '../components/Header.js';
import { TextField, Button, IconButton, CircularProgress } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ViewAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [monthInput, setMonthInput] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for calendar

  const pieData = selectedMonth ? {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [selectedMonth.attendancePercentage, 100 - selectedMonth.attendancePercentage],
      backgroundColor: ['#FFCE56', '#36A2EB'],
      hoverBackgroundColor: ['#FFCE56', '#36A2EB'],
    }],
  } : null;

  const overallAttendanceData = {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [80, 20],
      backgroundColor: ['#FFCE56', '#36A2EB'],
      hoverBackgroundColor: ['#FFCE56', '#36A2EB'],
    }],
  };

  const attendanceData = selectedMonth ? {
    hoursCompleted: { '1st hr': 'Present', '3rd hr': 'Absent', '6th hr': 'OD' },
    details: [
      { day: '1', status: { '1st hr': 'Present', '3rd hr': 'Absent', '6th hr': 'OD' } },
      { day: '2', status: { '1st hr': 'Absent', '3rd hr': 'OD', '6th hr': 'Present' } },
      { day: '3', status: { '1st hr': 'OD', '3rd hr': 'Present', '6th hr': 'Absent' } },
      // Add more details as needed
    ]
  } : null;

  const handleMonthChange = (date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setLoading(true);
    setTimeout(() => {
      setSelectedMonth({
        month,
        year,
        attendancePercentage: 75,
      });
      setSelectedDate(date);
      setMonthInput(`${month.toString().padStart(2, '0')}-${year}`);
      setShowCalendar(false);
      setLoading(false);
    }, 1000); // Simulate async loading
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMonthInput(value);
    const [month, year] = value.split('-');
    if (month && year && !isNaN(month) && !isNaN(year) && month.length === 2 && year.length === 4) {
      setSelectedMonth({
        month: parseInt(month, 10),
        year: parseInt(year, 10),
        attendancePercentage: 75,
      });
    } else {
      setSelectedMonth(null);
    }
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="p-8 bg-yellow-100">
      <Header />
      <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg">
        <div className="row w-full">
          <div className="w-2/3">
            <h2 className="text-red-500 text-xl font-bold">Role: Student</h2>
            <div className="mt-4">
              <p className="text-gray-700"><strong>Name:</strong> John Doe</p>
              <p className="text-gray-700"><strong>Roll No:</strong> 123456</p>
              <p className="text-gray-700"><strong>Register Number:</strong> 789101</p>
              <p className="text-gray-700"><strong>Department:</strong> Computer Science</p>
            </div>
          </div>
          <br></br>
          <div>
            <div className="top-right">
              <TextField
                label="MM-YYYY"
                value={monthInput}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                className="month-input"
                style={{ marginRight: '8px' }}
              />
              <IconButton onClick={toggleCalendar} style={{ padding: '8px' }}>
                <CalendarMonthIcon />
              </IconButton>
              {showCalendar && (
                <div className="calendar-container" style={{ backgroundColor: "#f0f0f0" }}>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Calendar
                      onClickMonth={handleMonthChange}
                      view="year"
                      tileClassName={({ date, view }) => {
                        if (view === 'month') {
                          return 'month-tile';
                        }
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-blue-900 text-lg font-bold">Attendance</h2>
          {selectedMonth ? (
            <div className="mt-4">
              <div className="w-64 h-64 mx-auto">
                <Pie data={pieData} />
              </div>
              <table className="min-w-full bg-white border mt-4 table">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">1st hr</th>
                    <th className="py-2 px-4 border-b">3rd hr</th>
                    <th className="py-2 px-4 border-b">6th hr</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.details.map((detail, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">{detail.day}</td>
                      <td className="py-2 px-4 border-b">{detail.status['1st hr']}</td>
                      <td className="py-2 px-4 border-b">{detail.status['3rd hr']}</td>
                      <td className="py-2 px-4 border-b">{detail.status['6th hr']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-4">
              <div className="w-64 h-64 mx-auto">
                <Pie data={overallAttendanceData} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAttendance;
