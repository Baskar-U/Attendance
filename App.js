import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';  // Import NativeRouter
import FacultyPage from './src/pages/facultypage.js';
import LoginPage from './src/pages/LoginPage.js';
import StudentPage from './src/pages/Student.js';
import AdminPage from './src/pages/adminpage.js';
import { View, Text, StyleSheet } from 'react-native';  // Use React Native components

function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/facultypage" element={<FacultyPage />} />
          <Route path="/studentpage" element={<StudentPage />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
