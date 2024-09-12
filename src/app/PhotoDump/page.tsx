'use client';
import React, { useEffect, useState } from 'react';

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<Array<string>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 4;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/fetchPhotos',{ next: { revalidate: 0 }}); // Adjust this endpoint to your API
        const data: Array<string> = await response.json();
        console.log('Fetched image URLs:', data);
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Calculate the index of the first and last image for the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Calculate total pages
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Handler for page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      {images.length === 0 ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {currentImages.map((url, index) => (
              <a
                key={index}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                className="block overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  alt={`Image ${index}`}
                  className="w-full h-96 object-cover"
                  src={url}
                />
              </a>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:bg-gray-400"
            >
              Previous
            </button>
            <span className="text-lg font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={indexOfLastImage >= images.length}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
