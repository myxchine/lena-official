"use client";

import React, { useState, useEffect } from "react";
import { deletePhoto, getPhotos } from "@/server/utils";
import { FiTrash } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";

interface Photo {
  id: string;
  url: string;
  category: string;
}

const MainView: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  const toggleSelectedPhoto = (id: string) => {
    const isSelected = selectedPhotos.includes(id);
    if (isSelected) {
      setSelectedPhotos(selectedPhotos.filter((p) => p !== id));
    } else {
      setSelectedPhotos([...selectedPhotos, id]);
    }
  };

  const deleteSelectedPhotos = () => {
    selectedPhotos.forEach((id) => {
      deletePhoto(id);
    });
    setSelectedPhotos([]);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photosData = await getPhotos();
        if (photosData.status === 200) {
          setPhotos(photosData.data as Photo[]);
        } else {
          console.error("Error fetching photos:", photosData.error);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <main>
      <div className="w-full">
        <div className="w-full p-4 bg-white bg-opacity-50 rounded-lg space-y-4">
          <div className="flex justify-between items-center space-x-4">
            <h1 className="text-xl font-bold uppercase">Photos</h1>
          </div>
          <div className="space-x-4">
            <Link href="/admin/newphoto">
              <button className="text-black text-opacity-100 hover:text-red rounded border border-gray-300 p-2">
                <div className="flex justify-center items-center space-x-2">
                  <IoMdAddCircleOutline />
                  <p className="text-xs">New Photo</p>
                </div>
              </button>
            </Link>
            {selectedPhotos.length > 0 && (
              <button
                className="text-black text-opacity-100 hover:text-red rounded border border-gray-300 p-2"
                onClick={deleteSelectedPhotos}
                disabled={selectedPhotos.length === 0}
              >
                <div className="flex justify-center items-center space-x-2">
                  <FiTrash />
                  <p className="text-xs">
                    Delete {selectedPhotos.length} photos
                  </p>
                </div>
              </button>
            )}
          </div>

          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className="table-auto w-full space-y-4 border border-gray-300 p-4 rounded-lg overflow-hidden">
              <thead className="border-b border-gray-300 p-4 rounded-t-lg">
                <tr className="text-left">
                  <th className="p-4">Category</th>
                  <th className="p-4">URL</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {photos && photos.length > 0 ? (
                  photos.map((photo) => (
                    <tr
                      key={photo.id}
                      className="text-left border-b pb-4 overflow-hidden"
                    >
                      <td className="p-4">
                        {truncateText(photo.category, 20)}
                      </td>
                      <td className="p-4">{truncateText(photo.url, 50)}</td>
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedPhotos.includes(photo.id)}
                          onChange={() => toggleSelectedPhoto(photo.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="w-full">
                    <td
                      colSpan={3}
                      className="text-center w-full py-12 text-xs"
                    >
                      No photos found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainView;
