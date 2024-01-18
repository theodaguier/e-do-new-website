export interface LazyImageProps {
  src: string | null | undefined;
  alt: string | any;
  width: number | string | undefined | any;
  height: number | string | undefined | any;
  placeholderColor: string;
  pointer?: boolean;
  quality?: number;
  style?: any;
  className?: string[] | string;
  isHovered?: boolean | any;
}

export interface LazyImageWithCaptionProps {
  src: string;
  alt: string | any;
  width: number | string | undefined | any;
  height: number | string | undefined | any;
  placeholderColor: string;
  pointer?: boolean;
  hovered?: boolean;
  quality?: number;
  title?: string;
  year?: string;
}
