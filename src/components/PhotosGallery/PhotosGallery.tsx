import { Photo } from "../../types/photo";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";

interface PhotosProps {
  items: Photo[];
  onSelect: (photo: Photo) => void;
}

export default function PhotosGallery({ items, onSelect }: PhotosProps) {
  return (
    <Grid>
      {items.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem
            item={photo}
            onClick={() => onSelect(photo)}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
