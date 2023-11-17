export type PostImageType = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type StackNavigationParams = {
  Home: undefined;
  PicInfo: PostImageType;
};
