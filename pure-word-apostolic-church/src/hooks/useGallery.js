import { useState, useEffect, useCallback } from 'react';
import { getGalleryImages, saveGalleryImages } from '../utils/data';

export const useGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = getGalleryImages();
    setGalleryImages(images);
    setLoading(false);
  }, []);

  const addImage = useCallback((image) => {
    const newImage = {
      ...image,
      id: Date.now(),
      date: new Date(),
      likes: 0
    };
    const updatedImages = [...galleryImages, newImage];
    setGalleryImages(updatedImages);
    saveGalleryImages(updatedImages);
  }, [galleryImages]);

  const updateImage = useCallback((id, updatedImage) => {
    const updatedImages = galleryImages.map(img => 
      img.id === id ? updatedImage : img
    );
    setGalleryImages(updatedImages);
    saveGalleryImages(updatedImages);
  }, [galleryImages]);

  const deleteImage = useCallback((id) => {
    const updatedImages = galleryImages.filter(img => img.id !== id);
    setGalleryImages(updatedImages);
    saveGalleryImages(updatedImages);
  }, [galleryImages]);

  const getImagesByCategory = useCallback((category) => {
    if (category === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === category);
  }, [galleryImages]);

  const getRecentImages = useCallback((limit = 6) => {
    return [...galleryImages]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);
  }, [galleryImages]);

  const getPopularImages = useCallback((limit = 6) => {
    return [...galleryImages]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, limit);
  }, [galleryImages]);

  const likeImage = useCallback((id) => {
    const updatedImages = galleryImages.map(img => 
      img.id === id ? { ...img, likes: (img.likes || 0) + 1 } : img
    );
    setGalleryImages(updatedImages);
    saveGalleryImages(updatedImages);
  }, [galleryImages]);

  return {
    galleryImages,
    loading,
    addImage,
    updateImage,
    deleteImage,
    getImagesByCategory,
    getRecentImages,
    getPopularImages,
    likeImage
  };
};