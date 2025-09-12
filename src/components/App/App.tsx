import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { getPhotos } from "../../services/photos";
import { Photo } from "../../types/photo";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSearch = async (search: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await getPhotos(search);
      setPhotos(data);
      console.log(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          {isLoading && <Loader />}
          {isError && <p>Whoops, something went wrong! Please try again!</p>}
          {photos.length > 0 && (
            <PhotosGallery
              items={photos}
              onSelect={handlePhotoClick}
            />
          )}
        </Container>
      </Section>
      {selectedPhoto && (
        <Modal onClose={handleCloseModal}>
          <img
            src={selectedPhoto?.src?.original}
            alt={selectedPhoto?.alt}
          />
        </Modal>
      )}
    </>
  );
}
