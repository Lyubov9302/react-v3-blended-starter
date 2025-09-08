export interface Img {
  original: string;
  medium: string;
}

export interface Photo {
  id: number;
  avg_color: string;
  alt: string;
  src: Img[];
}
