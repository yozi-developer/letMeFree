import { Privacy } from "tslint/lib/rules/completedDocsRule";

export enum ApiAppPlatform {
  Mobile = 1,
  IPhone = 2,
  IPad = 3,
  Android = 4,
  WindowsPhone = 5,
  Windows10 = 6,
  Web = 7,
  VkMobile = 8
}

export enum ApiBoolean {
  False = 0,
  True = 1
}

export enum ApiUserOccupationType {
  Work = "work",
  School = "school",
  University = "university"
}

export enum ApiPolitical {
  Communist = 1,
  Socialist = 2,
  Moderate = 3,
  Liberal = 4,
  Conservative = 5,
  Monarchical = 6,
  Ultraconservative = 7,
  Indifferent = 8,
  Libertarian = 9
}

export enum ApiPeopleMain {
  Mind = 1,
  Kindness = 2,
  Beauty = 3,
  Wealth = 4,
  Courage = 5,
  Humor = 6
}

export enum ApiLifeMain {
  Family = 1,
  Career = 2,
  Recreation = 3,
  Research = 4,
  Improving = 5,
  SelfDevelopment = 6,
  Beauty = 7,
  Fame = 8
}

export enum ApiSmoking {
  SharplyNegative = 1,
  Negative = 2,
  Compromise = 3,
  Neutral = 4,
  Positive = 5
}

export enum ApiAlcohol {
  SharplyNegative = 1,
  Negative = 2,
  Compromise = 3,
  Neutral = 4,
  Positive = 5
}

export enum ApiRelativesType {
  Child = "child",
  Sibling = "sibling",
  Parent = "parent",
  Grandparent = "grandparent",
  Grandchild = "grandchild"
}

export enum ApiRelationType {
  NotMarried = 1,
  HaveAFriend = 2,
  Betrothed = 3,
  Married = 4,
  Compicated = 5,
  InSearch = 6,
  InLove = 7,
  CivilMarriage = 8,
  Undefined = 0
}

export enum ApiSchoolType {
  School = 0,
  Gymnasium = 1,
  Lyceum = 2,
  BoardingSchool = 3,
  EveningSchool = 4,
  MusicSchool = 5,
  SportsSchool = 6,
  ArtSchool = 7, //  Художественная школа
  College = 8,
  ProfessionalLiceum = 9,
  TechnicalSchool = 10,
  VocationalSchool = 11,
  SpecializedSchool = 12, // Училище
  ArtSchool2 = 13 // Школа искусств
}

export enum ApiUserSex {
  Female = 1,
  Male = 2,
  Undefned = 0
}

export enum ApiWallDefault {
  Owner = "owner",
  All = "all"
}

export enum ApiUserDeactivated {
  Deleted = "deleted",
  Banned = "banned"
}

export enum ApiPhotoSizeType {
  S = "s",
  M = "m",
  X = "x",
  O = "o",
  P = "p",
  Q = "q",
  R = "r",
  Y = "y",
  Z = "z",
  W = "w"
}

/**
 * @see: https://vk.com/dev/objects/privacy
 * list{list_id}, {user_id}, -list{list_id}. -{user_id}
 */
export enum PrivacyViewGroup {
  All = "all",
  Friends = "friends",
  FriendsOfFriends = "friends_of_friends",
  FriendsOfFriendsOnly = "friends_of_friends_only",
  Nobody = "nobody",
  OnlyMe = "only_me"
}
