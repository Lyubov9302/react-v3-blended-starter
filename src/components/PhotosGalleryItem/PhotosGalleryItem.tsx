import { Photo } from "../../types/photo";
import GridItem from "../GridItem/GridItem";
import css from "./PhotosGalleryItem.module.css";
import noImagePlaceholder from "../../assets/no-image-svgrepo-com.svg";

interface PhotosGalleryItemProps {
  item: Photo;
  onClick: (photo: Photo) => void;
}

export default function PhotosGalleryItem({
  item,
  onClick,
}: PhotosGalleryItemProps) {
  console.log(item);
  return (
    <GridItem>
      <div
        className={css.thumb}
        onClick={() => onClick(item)}
      >
        <img
          src={item.src?.[0]?.original || noImagePlaceholder}
          alt={item.alt}
        />
      </div>
    </GridItem>
  );
}
