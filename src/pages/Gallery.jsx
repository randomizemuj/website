import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import React from "react";

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
];

function CustomPhoto({ photo, width, height, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        aspectRatio: `${width} / ${height}`, // Maintain aspect ratio dynamically
        borderRadius: "14px",
        overflow: "hidden",
        margin: "15px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src={photo.src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the image scales properly
        }}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="mx-4 sm:mx-9 md:mx-28 p-3 mb-24 relative my-28">
      <h1 className="text-4xl sm:text-4xl md:text-6xl text-center mb-6 font-bold md:mb-9 text-white">
        Gallery
      </h1>

      <RowsPhotoAlbum
        photos={photos}
        render={{
          photo: ({ onClick }, { photo, width, height }) => (
            <CustomPhoto
              photo={photo}
              width={width}
              height={height}
              onClick={onClick}
            />
          ),
        }}
      />
    </div>
  );
}
