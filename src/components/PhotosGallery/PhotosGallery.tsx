import { Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import css from "./PhotosGallery.module.css";

interface PhotosProps {
  items: Photo[];
  onSelect: (photo: Photo) => void;
}

export default function PhotosGallery({ items, onSelect }: PhotosProps) {
  return (
    <ul className={css.gallery}>
      {items.map((photo) => (
        <li key={photo.id}>
          <PhotosGalleryItem
            item={photo}
            onClick={onSelect}
          />
        </li>
      ))}
    </ul>
  );
}
