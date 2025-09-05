import Grid from "../Grid/Grid";

interface PhotosProps {
  array: Photos[];
}

export default function PhotosGallery({ array }: PhotosProps) {
  return (
    <Grid>
      {array.map((arr) => (
        <GridItem>
          <PhotosGalleryItem />
        </GridItem>
      ))}
    </Grid>
  );
}
