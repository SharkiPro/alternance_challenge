import React from "react";
import UserList from "../components/UserList";

const UserListPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="mb-8 text-4xl font-bold">User List</h1>
      <UserList />
    </div>
  );
};

export default UserListPage;
