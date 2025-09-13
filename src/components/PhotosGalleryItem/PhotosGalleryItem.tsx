import { Photo } from "../../types/photo";
import GridItem from "../GridItem/GridItem";
import css from "./PhotosGalleryItem.module.css";
import noImagePlaceholder from "../../assets/no-image-svgrepo-com.svg";

interface PhotosGalleryItemProps {
  item: Photo;
  onClick: () => void;
}

export default function PhotosGalleryItem({
  item,
  onClick,
}: PhotosGalleryItemProps) {
  return (
    <GridItem>
      <div
        className={css.thumb}
        onClick={onClick}
      >
        <img
          src={item.src.original || noImagePlaceholder}
          alt={item.alt}
        />
      </div>
    </GridItem>
  );
}
