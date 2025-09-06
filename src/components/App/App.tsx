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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleSearch = async (search: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await getPhotos(search);
      setPhotos(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          {isLoading && <Loader />}
          {isError && <p>Whoops, something went wrong! Please try again!</p>}
          {photos.length > 0 && <PhotosGallery array={photos} />}
          <button onClick={openModal}>Open modal</button>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <img
              // src={arr.id}
              // alt={}
              />
            </Modal>
          )}
        </Container>
      </Section>
    </>
  );
}
