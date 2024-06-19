import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserProfilePage from './pages/UserProfilePage';
import AlbumPage from './pages/AlbumPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserProfilePage />} />
        <Route path="/albums/:id" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
};

export default App;
