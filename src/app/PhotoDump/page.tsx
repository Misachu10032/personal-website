'use client';
import React, { useEffect, useState } from 'react';

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 4;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/fetchPhotos'); // Adjust this endpoint to your API
        const data: string[] = await response.json();
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

  // Handler for page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="image-gallery">
      {images.length === 0 ? (
        <p>Loading images...</p>
      ) : (
        <>
          <div className="image-grid">
            {currentImages.map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={url}
                  alt={`Image ${index}`}
                  className="gallery-image"
                />
              </a>
            ))}
          </div>
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              disabled={indexOfLastImage >= images.length}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
      <style jsx>{`
        .image-gallery {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* Display 2 images per row */
          gap: 10px;
        }
        .gallery-image {
          width: 100%; /* Keep images at their original resolution */
          height: auto;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
        }
        .pagination {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pagination button {
          padding: 5px 10px;
          border: none;
          background-color: #0070f3;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }
        .pagination button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
