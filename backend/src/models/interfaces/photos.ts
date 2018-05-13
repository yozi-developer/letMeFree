import { ApiBoolean, ApiPhotoSizeType, PrivacyViewGroup } from "./constants";

export interface IApiPhoto extends IApiPhotoBase, IApiPhotoSizesPlaneFields {}

export interface IApiPhotoBase {
  id: number;
  album_id: number;
  owner_id: number;
  user_id?: number;
  text?: string;
  date: number;
  width?: number;
  height?: number;
}

export interface IApiPhotoSizesPlaneFields {
  photo_75?: string;
  photo_130?: string;
  photo_604?: string;
  photo_807?: string;
  photo_1280?: string;
  photo_2560?: string;
}

export interface IApiPhotoSizesComplexField {
  sizes?: IApiPhotoSize[];
}

export interface IApiPhotoSize {
  src: string;
  width: number | 0;
  height: number | 0;
  type: ApiPhotoSizeType;
}

export interface IApiPhotoLocationFields {
  lat: number;
  long: number;
}

export interface IApiPhotoExtendedInfo {
  likes: IApiPhotoLikesInfo;
  comments: IApiCommentsInfo;
  tags: IApiTagsInfo;
  can_comment: ApiBoolean;
  reposts: IApiRepostsInfo;
}

export interface IApiPhotoLikesInfo {
  user_likes: ApiBoolean;
  count: number;
}

export interface IApiCommentsInfo {
  count: number;
}

export interface IApiTagsInfo {
  count: number;
}

export interface IApiRepostsInfo {
  count: number;
}

export interface IApiPhotoAlbum {
  id: number;
  thumb_id: number | 0;
  owner_id: number;
  title: string;
  description?: string;
  created?: number;
  updated?: number;
  size: number;
  can_upload?: typeof ApiBoolean.True;
  privacy_view?: (PrivacyViewGroup | string)[];
  privacy_comment?: (PrivacyViewGroup | string)[];
  upload_by_admins_only?: ApiBoolean;
  thumb_src?: string;
}

export interface IApiPhotosGetQueryExtended {
  extended: typeof ApiBoolean.True;
}

export interface IApiPhotosGetQueryComplexSizes {
  photo_sizes: typeof ApiBoolean.True;
}

type ApiPhotosGetAlbumItemType<Q> = IApiPhotoBase &
  (Q extends IApiPhotosGetQueryExtended ? IApiPhotoExtendedInfo : {}) &
  (Q extends IApiPhotosGetQueryComplexSizes
    ? IApiPhotoSizesComplexField
    : IApiPhotoSizesPlaneFields) &
  (IApiPhotoLocationFields | {});

export interface IApiPhotoGetAlbumItemsResult<Q> {
  count: number;
  items: ApiPhotosGetAlbumItemType<Q>[];
}
