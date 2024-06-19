import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PhotoAlbum = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchAlbumData = async () => {
      const albumResponse = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
      );
      const albumData = await albumResponse.json();
      setAlbum(albumData);

      const photosResponse = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
      );
      const photosData = await photosResponse.json();
      setPhotos(photosData);
    };

    fetchAlbumData();
  }, [id]);

  if (!album) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Link
            to={`/users/${album.userId}`}
            className="text-blue-500 hover:underline flex items-center"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Go back
          </Link>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-gray-800">{album.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;
