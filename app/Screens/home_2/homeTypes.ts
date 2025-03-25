export interface propertyDetail {
  IsSuccess: boolean;
  Message: string;
  Data: propertyDetailData;
  TotalCount: number;
}

export interface guestLoginFailedRes {
  IsSuccess: boolean;
  Message: string;
  TotalCount: number;
}

export interface propertyDetailData {
  Id: number;
  PropertyHostId: number;
  PropertyNamePublic: string;
  PropertyNameInternal: string;
  LicenseNo: string;
  InternalNotes: string;
  PropertyType: string;
  CheckInTimeFrom: string;
  CheckOutTimeTo: string;
  FlgRentEntirePlace: boolean;
  BedroomsCount: number;
  BathroomsCount: number;
  LivingRoomsCount: number;
  KitchensCount: number;
  FlgCommonSpaceAvailable: boolean;
  CommonSpaceSize: number;
  CommonSpaceSofaBedsCount: number;
  CountExtraBedsAvailable: number;
  MaxPersonCanStay: number;
  NoOfDaysBeforeArrival: number;
  PropertyLat: number;
  PropertyLong: number;
  PropertyDiscription: string;
  PropertyLocalInfo: string;
  Area: number;
  AreaType: string;
  LocationName: string;
  AddressFull: string;
  LocationId: number;
  VideoUrl: string;
  LodgingDetails: string;
  LedgingAccessDetails: string;
  LodgingFlgPetsAllowed: boolean;
  LodgingFlgEventsAllowed: boolean;
  LodgingFlgSmokingAllowed: boolean;
  LodgingFlgChildrenAllowed: boolean;
  LodgingFlgBedsRelocationAllowed: boolean;
  PrPropertyHouseRulesDetail: string;
  PaymentFlgDepositRequired: boolean;
  PaymentDamageDeposit: number;
  PaymentPolicyDesc: string;
  CancellationPolicyDetail: string;
  CheckInPlace: string;
  RatePerNight: number;
  PropertyRating: number;
  FlgFavorite: boolean;
  ObjSysMediaFile: ObjSysMediaFile[];
  ObjAmenities: ObjAmenity[];
  ObjPrCancellationPolicy: ObjPrCancellationPolicy[];
  ObjFeeHead: ObjFeeHead[];
  ObjUnavailableDates: string[];
  ObjLayout: ObjLayout;
  ObjOwner: ObjOwner;
  ObjPaymentMethod: any[];
  ObjHealthAndSafety: ObjHealthAndSafety[];
}

export interface ObjSysMediaFile {
  Id: number;
  UniqueFileName: string;
  FlgCoverPhoto: boolean;
  AWSS3FilePath: string;
  AWSThumbNailRelativePath: string;
  DisplayOrder: number;
}

export interface ObjAmenity {
  Id: number;
  GroupName: string;
  Amenities: Amenity[];
}

export interface Amenity {
  Id: number;
  Name: string;
  AmenityItemCount: string;
}

export interface ObjPrCancellationPolicy {
  Id: number;
  Text: string;
}

export interface ObjFeeHead {
  Id: number;
  Name: string;
  Amount: string;
  CalculationBase: string;
  ObjFinPrFeeHeadMultiRate: ObjFinPrFeeHeadMultiRate[];
}

export interface ObjFinPrFeeHeadMultiRate {
  Id: number;
  MultiRateName: string;
  Amount: number;
}

export interface ObjLayout {
  BedRooms: BedRoom[];
  LivingRooms: any[];
}

export interface BedRoom {
  Name: string;
  NoOfBeds: number;
  PersonCanSleep: number;
  FlgPrivateBathRoom: boolean;
}

export interface ObjOwner {
  Name: string;
  PhoneNo: string;
}

export interface ObjHealthAndSafety {
  GroupName: string;
  ObjPrSafetyChecklistData: ObjPrSafetyChecklistDaum[];
}

export interface ObjPrSafetyChecklistDaum {
  FlgYes: boolean;
  Description: string;
}

export interface myBookingProperty {
  IsSuccess: boolean;
  Message: string;
  Data: myBookingPropertyData;
  TotalCount: number;
}

export interface myBookingPropertyData {
  Id: number;
  BookingRef: string;
  Location: string;
  PropertyName: string;
  PropertyType: string;
  PropertyId: number;
  DateFrom: string;
  DateTo: string;
  CheckInTime: string;
  CheckOutTime: string;
  NoOfNights: number;
  AdultsCount: number;
  KidsCount: number;
  PropertyRating: number;
  FlgPetsAllowed: boolean;
  CheckinStatus: string;
  ObjOwner: ObjOwner;
  ObjSysMediaFile: ObjSysMediaFile[];
  ObjBookedBy: ObjBookedBy;
}

export interface ObjOwner {
  Name: string;
  PhoneNo: string;
}

export interface ObjSysMediaFile {
  Id: number;
  UniqueFileName: string;
  FlgCoverPhoto: boolean;
  AWSS3FilePath: string;
  AWSThumbNailRelativePath: string;
  DisplayOrder: number;
}

export interface ObjBookedBy {
  Name: string;
  Phone: string;
  Email: string;
  Address: string;
}
