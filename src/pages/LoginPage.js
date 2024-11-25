import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email format validation
    const studentRegex = /^[a-zA-Z]+[.][0-9]+[a-zA-Z]+@licet\.ac\.in$/;  // e.g., name.number@licet.ac.in
    const facultyRegex = /^[a-zA-Z]+@licet\.ac\.in$/;           // e.g., name@licet.ac.in

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    if (!studentRegex.test(username) && !facultyRegex.test(username)) {
      setError('Invalid email format');
      return;
    }

    // Redirect to the student page after successful login
    if (studentRegex.test(username)) {
      navigate('/studentpage');
    } else {
      navigate('/facultypage');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: '0 auto', padding: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Login
      </Typography>
      
      {error && <Typography variant="body2" color="error" align="center">{error}</Typography>}
      
      <form onSubmit={handleSubmit} className="login-form">
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          type="submit"
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

export default LoginPage;
