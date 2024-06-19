import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Album {
  id: number;
  title: string;
}

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const userData = await userResponse.json();
      setUser(userData);

      const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
      const albumsData = await albumsResponse.json();
      setAlbums(albumsData);
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Link to="/" className="text-blue-500 hover:underline flex items-center">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
            Go back
          </Link>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-800">{user.name}</h1>
        <p className="mb-2"><strong>Username:</strong> {user.username}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <h2 className="mt-6 mb-4 text-2xl font-bold text-gray-800">Albums</h2>
        <ul className="list-disc list-inside">
          {albums.map(album => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`} className="text-blue-500 hover:underline">{album.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
