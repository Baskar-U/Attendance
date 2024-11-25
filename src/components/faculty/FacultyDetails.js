import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

function FacultyDetails() {
  return (
    <Card
      sx={{
        margin: '20px',
        padding: '10px',
        backgroundColor: 'lightyellow',
        boxShadow: 2,
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Avatar for Profile */}
        <Avatar
          sx={{
            width: 130,
            height: 130,
            backgroundColor: '#f3e5f5',
            fontSize: '60px',
          }}
        >
          👤
        </Avatar>

        {/* Faculty Details */}
        <Box>
          <Typography variant="h6" component="p">
            <strong>Name:</strong> Dennyson
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Role:</strong> Faculty
          </Typography>
          <Typography variant="body1" component="p">
            <strong>Class:</strong> CSE-A
          </Typography>
          <Typography variant="body1" component="p">
            <strong>No. of Students:</strong> 85
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default FacultyDetails;
