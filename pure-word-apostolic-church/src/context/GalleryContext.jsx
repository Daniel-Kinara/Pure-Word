import { createContext, useState, useContext, useEffect } from 'react';
import { getGalleryImages, saveGalleryImages } from '../utils/data';

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load initial data
    const images = getGalleryImages();
    setGalleryImages(images);
    setLoading(false);
  }, []);

  const addImage = (image) => {
    const newImage = {
      ...image,
      id: Date.now(),
      date: new Date(),
      likes: 0
    };
    const updatedImages = [...galleryImages, newImage];
    setGalleryImages(updatedImages);
    saveGalleryImages(updatedImages);
  };

  const updateImage = (id, updatedImage) => {
    const updatedImages = galleryImages.map(img => 
      img.id === id ? updatedImage : img
    );
    setGalleryImages(updatedImages);
    saveGalleryImages(updatedImages);
  };

  const deleteImage = (id) => {
    const updatedImages = galleryImages.filter(img => img.id !== id);
    setGalleryImages(updatedImages);
    saveGalleryImages(updatedImages);
  };

  const getImagesByCategory = (category) => {
    if (category === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === category);
  };

  return (
    <GalleryContext.Provider value={{
      galleryImages,
      loading,
      addImage,
      updateImage,
      deleteImage,
      getImagesByCategory
    }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);