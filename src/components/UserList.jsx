import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = await userResponse.json();

      const updatedUsers = await Promise.all(
        usersData.map(async (user) => {
          const todosResponse = await fetch(
            `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`
          );
          const todosData = await todosResponse.json();

          const albumsResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${user.id}/albums`
          );
          const albumsData = await albumsResponse.json();

          return {
            ...user,
            todosCount: todosData.length,
            albumsCount: albumsData.length,
          };
        })
      );

      setUsers(updatedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-center">Username</th>
              <th className="px-6 py-3 text-center">Email</th>
              <th className="px-6 py-3 text-center">Website</th>
              <th className="px-6 py-3 text-center">Company</th>
              <th className="px-6 py-3 text-center">Number of Todos</th>
              <th className="px-6 py-3 text-center">Number of Albums</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-6 py-4 text-center">
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {user.username}
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">{user.email}</td>
                <td className="px-6 py-4 text-center">
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.website}
                  </a>
                </td>
                <td className="px-6 py-4 text-center">{user.company.name}</td>
                <td className="px-6 py-4 text-center">{user.todosCount}</td>
                <td className="px-6 py-4 text-center">{user.albumsCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
