import React from 'react';
import UserList from '../components/UserList';

const UserListPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">User List</h1>
      <UserList />
    </div>
  );
};

export default UserListPage;
