import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import React from "react";

const photos = [
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894904/Website/GalleryPhotos/1_ukjzqp.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894905/Website/GalleryPhotos/2_zlbcpd.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894904/Website/GalleryPhotos/3_fbny0l.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894905/Website/GalleryPhotos/4_vfbuhn.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894911/Website/GalleryPhotos/5_d1yzj6.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894907/Website/GalleryPhotos/6_tdeu3f.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894910/Website/GalleryPhotos/7_rksjdx.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894909/Website/GalleryPhotos/8_zcrqg5.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894909/Website/GalleryPhotos/9_un1jjx.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894905/Website/GalleryPhotos/10_ynwzre.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894905/Website/GalleryPhotos/11_j0p2me.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894907/Website/GalleryPhotos/12_thlfff.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894908/Website/GalleryPhotos/13_gaujtx.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894910/Website/GalleryPhotos/14_d0l5b1.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "https://res.cloudinary.com/randomize/image/upload/v1737894910/Website/GalleryPhotos/15_fkgry2.jpg",
    width: 800,
    height: 600,
  },
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
