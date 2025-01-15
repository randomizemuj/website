import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  { src: "/galleryPhotos/1.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/2.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/3.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/4.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/5.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/6.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/7.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/8.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/9.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/10.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/11.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/12.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/13.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/14.JPG", width: 800, height: 600 },
  { src: "/galleryPhotos/15.JPG", width: 800, height: 600 },
  // Add more photos as needed
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? photos : photos.slice(0, 6); // Display only 6 photos initially

  return (
    <div className="mx-9 md:mx-28 p-3 mb-24 relative">
      <h1 className=" text-4xl md:text-6xl text-center font-bold md:mb-9 text-white">
        Gallery
      </h1>

      {/* View More Button with Down Arrow */}
      <div className="flex place-content-center my-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white md:absolute top-5 md:top-7 text-sm right-4 bg-blue-500/50 hover:bg-blue-600/45 p-2 md:py-2 md:px-4 flex items-center rounded-md shadow-md transition-all duration-300"
        >
          <span>{showAll ? "View Less" : "View More"}</span>
          {/* Down Arrow */}
          <span
            className={`ml-2 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      <div>
        <RowsPhotoAlbum photos={visiblePhotos} />
      </div>
    </div>
  );
}
