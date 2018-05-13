import {
  ApiBoolean,
  ApiUserOccupationType,
  ApiAppPlatform,
  ApiPolitical,
  ApiPeopleMain,
  ApiLifeMain,
  ApiSmoking,
  ApiAlcohol,
  ApiRelativesType,
  ApiRelationType,
  ApiSchoolType,
  ApiUserSex,
  ApiWallDefault,
  ApiUserDeactivated
} from "./constants";
import { IApiPhoto } from "./photo";

export interface IApiUserBase {
  id: number;
  first_name: string;
  last_name: string;
  deactivated?: ApiUserDeactivated;
  hidden?: 1;
}

export interface IApiUserAboutField {
  about?: string;
}

export interface IApiUserActivitiesField {
  activities?: string;
}

export interface IApiUserBirthDateField {
  bdate?: string; // D.M.YYYY | D.M
}

export interface IApiUserBlacklistedField {
  blacklisted?: ApiBoolean;
}

export interface IApiUserBlacklistedByMeField {
  blacklisted_by_me?: ApiBoolean;
}

export interface IApiUserBooksField {
  books?: string;
}
export interface IApiUserCanPostField {
  can_post?: ApiBoolean;
}
export interface IApiUserCanSeeAllPostsField {
  can_see_all_posts?: ApiBoolean;
}
export interface IApiUserCanSeeAudioField {
  can_see_audio?: ApiBoolean;
}

export interface IApiUserCanSendFriendRequestsField {
  can_send_friend_request?: ApiBoolean;
}

export interface IApiUserCanWritePrivateMessagesField {
  can_write_private_message?: ApiBoolean;
}
export interface IApiUserCareerField {
  career?: IApiUserCareer[];
}
export interface IApiUserCareer {
  group_id?: number;
  company?: string;
  country_id?: number;
  city_id?: number;
  city_name?: string;
  from?: number;
  until?: number;
  position?: string;
}
export interface IApiUserCityField {
  city?: IApiUserCity;
}

export interface IApiUserCity {
  id: number;
  title: string;
}

export interface IApiUserCommonCountField {
  common_count?: number;
}
export interface IApiUserConnectionFields {
  skype?: string;
  facebook?: string;
  twitter?: string;
  livejournal?: string;
  instagram?: string;
}

export interface IApiUserContactFields {
  mobile_phone?: string;
  home_phone?: string;
}

export interface IApiUserCountersField {
  counters?: IApiUserCounters;
}

export interface IApiUserCounters {
  albums?: number;
  videos?: number;
  audios?: number;
  photos?: number;
  notes?: number;
  friends?: number;
  groups?: number;
  online_friends?: number;
  mutual_friends?: number;
  user_videos?: number;
  followers?: number;
  pages?: number;
}

export interface IApiUserCountryField {
  country?: IApiUserCountry;
}

export interface IApiUserCountry {
  id: number;
  title: string;
}

export interface IApiUserCropPhotoField {
  crop_photo?: IApiUserCropPhoto;
}

export interface IApiUserCropPhoto {
  photo: IApiPhoto;
  crop: IApiPhotoCrop;
  rect: IApiPhotoCrop;
}

export interface IApiPhotoCrop {
  x: number;
  y: number;
  x2: number;
  y2: number;
}
export interface IApiUserEducationFields {
  university?: number;
  university_name?: string;
  faculty?: number;
  faculty_name?: string;
  graduation?: number;
}

export interface IFirstNameCaseFields {
  first_name_nom?: string;
  first_name_gen?: string;
  first_name_dat?: string;
  first_name_acc?: string;
  first_name_ins?: string;
  first_name_abl?: string;
}

export interface IApiUserDomainField {
  domain?: string;
}
export interface IApiUserFollowerCountField {
  followers_count?: number;
}

export interface IApiUserFriendStatusField {
  friend_status?: 0 | 1 | 2 | 3;
}

export interface IApiUserGamesField {
  games?: string;
}
export interface IApiUserHasMobileField {
  has_mobile?: ApiBoolean;
}
export interface IApiUserHasPhotoField {
  has_photo?: ApiBoolean;
}
export interface IApiUserHomeTownField {
  home_town?: string;
}
export interface IApiUserInterestsField {
  interests?: string;
}
export interface IapiUserIsFavorityField {
  is_favorite?: ApiBoolean;
}
export interface IAPiUserIsFriendField {
  is_friend?: ApiBoolean;
}
export interface IApiUserIsHiddenFromFeedField {
  is_hidden_from_feed?: ApiBoolean;
}

export interface ILastNameCaseFields {
  last_name_nom?: string;
  last_name_gen?: string;
  last_name_dat?: string;
  last_name_acc?: string;
  last_name_ins?: string;
  last_name_abl?: string;
}

export interface ILastSeenField {
  last_seen?: IApiUserLastSeen;
}

export interface IApiUserLastSeen {
  time: number;
  platform: ApiAppPlatform;
}

export interface IApiUserFriendListsField {
  lists?: string;
}

export interface IApiUserMaidenNameField {
  maiden_name?: string;
}

export interface IApiUserMilitaryField {
  military?: IApiUserMilitary[];
}

export interface IApiUserMilitary {
  unit?: string;
  unit_id: number;
  country_id?: number;
  from?: number;
  until?: number;
}

export interface IApiUserMoviesField {
  movies?: string;
}

export interface IApiUserMisucField {
  music?: string;
}

export interface IApiUserNickNameField {
  nickname?: string;
}

export interface IApiOccupationField {
  occupation?: IApiUserOccupation;
}

export interface IApiUserOccupation {
  type: ApiUserOccupationType;
  id?: number;
  name?: string;
}

export interface IApiUserOnlineFields {
  online?: ApiBoolean;
  online_mobile?: typeof ApiBoolean.True;
  online_app?: ApiAppPlatform;
}

export interface IApiUserPersonalField {
  personal?: IApiUserPersonal;
}

export interface IApiUserPersonal {
  political?: ApiPolitical;
  langs?: string[];
  religion?: string;
  inspired_by?: string;
  people_main?: ApiPeopleMain;
  life_main?: ApiLifeMain;
  smoking?: ApiSmoking;
  alcohol?: ApiAlcohol;
}

export interface IApiUserPhoto50Field {
  photo_50?: string;
}

export interface IApiUserPhoto100Field {
  photo_100?: string;
}
export interface IApiUserPhoto200Field {
  photo_200?: string;
}
export interface IApiUserPhoto200OrigField {
  photo_200_orig?: string;
}
export interface IApiUserPhoto400OrigField {
  photo_400_orig?: string;
}
export interface IApiPhotoIdField {
  photo_id?: string;
}
export interface IApiPhotoMaxField {
  photo_max?: string;
}
export interface IAPiPhotoMaxOrigField {
  photo_max_orig?: string;
}
export interface IApiQuotesField {
  quotes?: string;
}

export interface IApiUserRelativesField {
  relatives?: IApiUserRelatives[];
}

export interface IApiUserRelatives {
  id?: number;
  name: string;
  type: ApiRelativesType;
}

export interface IApiUserRelationFields {
  relation?: ApiRelationType;
  relation_partner?: number;
}

export interface IApiUserSchoolsField {
  schools: IApiUserSchool[];
}

export interface IApiUserSchool {
  id?: number;
  country?: number;
  city?: number;
  name: string;
  year_from?: number;
  year_to?: number;
  year_graduated?: number;
  class?: string;
  speciality?: string;
  type: ApiSchoolType;
  type_str: string;
}

export interface IApiUserScreenNameField {
  screen_name?: string;
}

export interface IApiUserSexField {
  sex?: ApiUserSex;
}

export interface IApiUserSiteField {
  site?: string;
}

export interface IApiStatusFields {
  status?: string;
  status_audio?: any;
}

export interface IApiUserTimezoneField {
  timezone?: number;
}

export interface IApiUserTrendngField {
  trending?: ApiBoolean;
}

export interface IApiUserTvField {
  tv?: string;
}

export interface IApiUserUniversitiesField {
  universities: IApiUserUniversity[];
}

export interface IApiUserUniversity {
  id?: number;
  country?: number;
  city?: number;
  name: string;
  facult?: number;
  faculty_name?: string;
  chair?: number;
  chair_name?: string;
  graduation?: number;
  education_form?: string;
  education_status?: string;
}

export interface IApiVerifiedField {
  verified?: ApiBoolean;
}

export interface IApiWallDefaultField {
  wall_default: ApiWallDefault;
}
