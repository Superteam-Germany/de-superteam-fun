export type ProjectRecord = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    link: string;
    logo: string;
    display: boolean;
  };
};

type Logo = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
};

type Thumbnails = {
  small: Thumbnail;
  large: Thumbnail;
  full: Thumbnail;
};

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
