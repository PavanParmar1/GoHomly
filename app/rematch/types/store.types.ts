export interface Root {
  loading: Loading;
  Auth: Auth2;
  Search: Search2;
  Property: Property3;
  Guest: Guest3;
  _persist: Persist;
}

export interface Loading {
  global: boolean;
  models: Models;
  effects: Effects;
}

export interface Models {
  Auth: boolean;
  Search: boolean;
  Property: boolean;
  Guest: boolean;
}

export interface Effects {
  Auth: Auth;
  Search: Search;
  Property: Property;
  Guest: Guest;
}

export interface Auth {
  changePassword: boolean | undefined;
  updatePassword: boolean | undefined;
  forgotPassword: boolean | undefined;
  signUp: boolean;
  verifyOtp: boolean;
  resendOtp: boolean;
  signIn: boolean;
  guestLogin: boolean;
  signOut: boolean;
  updateProfile: boolean;
}

export interface Search {
  searchProperty: boolean;
  propertyDetail: boolean;
  getCurrentLocation: boolean;
}

export interface Property {
  guestPropertyDetail: boolean;
  onGoingBooking: boolean;
  getPastBooking: boolean;
  getReviews: boolean;
  selectProperty: boolean;
  likeProperty: boolean;
}

export interface Guest {
  addGuest: boolean;
  getListOfGuests: boolean;
  getLanguages: boolean;
  getRequestedDocumentByProperty: boolean;
  getGuestDocs: boolean;
  uploadDocument: boolean;
  viewDocument: boolean;
  checkIn: boolean;
  checkOut: boolean;
}

export interface Auth2 {
  referrals: any;
  auth: Auth3;
  guest: Guest2;
}

export interface Auth3 {
  IsSuccess: boolean;
  Message: string;
  Data: Data;
  TotalCount: number;
}

export interface Data {
  MobileNo: any;
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Token: Token;
  PhoneNumber: string;
  AccountRefferalCode: string;
}

export interface Token {
  AccessToken: string;
  Expiration: string;
  RefreshToken: string;
}

export interface Guest2 {
  IsSuccess: boolean;
  Message: string;
  TotalCount: number;
}

export interface Search2 {
  search: any[];
  totalCount: number;
  property: Property2;
  location: Location;
}

export interface Property2 {
  GuestBookFile: any;
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
  ObjPaymentMethod: ObjPaymentMethod[];
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
  Amount?: string;
  CalculationBase?: string;
  ObjFinPrFeeHeadMultiRate?: any[];
}

export interface ObjLayout {
  BedRooms: BedRoom[];
  LivingRooms: LivingRoom[];
}

export interface BedRoom {
  Name: string;
  NoOfBeds: number;
  PersonCanSleep: number;
  FlgPrivateBathRoom: boolean;
}

export interface LivingRoom {
  Name: string;
  NoOfBeds: number;
  PersonCanSleep: number;
  FlgPrivateBathRoom: boolean;
}

export interface ObjOwner {
  Name: string;
  PhoneNo: string;
}

export interface ObjPaymentMethod {
  Id: number;
  Name: string;
}

export interface ObjHealthAndSafety {
  GroupName: string;
  ObjPrSafetyChecklistData: ObjPrSafetyChecklistDaum[];
}

export interface ObjPrSafetyChecklistDaum {
  FlgYes: boolean;
  Description: string;
}

export interface Location {
  plus_code: PlusCode;
  results: Result[];
  status: string;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface Result {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  plus_code?: PlusCode2;
  types: string[];
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Geometry {
  location: Location2;
  location_type: string;
  viewport: Viewport;
  bounds?: Bounds;
}

export interface Location2 {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Northeast;
  southwest: Southwest;
}

export interface Northeast {
  lat: number;
  lng: number;
}

export interface Southwest {
  lat: number;
  lng: number;
}

export interface Bounds {
  northeast: Northeast2;
  southwest: Southwest2;
}

export interface Northeast2 {
  lat: number;
  lng: number;
}

export interface Southwest2 {
  lat: number;
  lng: number;
}

export interface PlusCode2 {
  compound_code: string;
  global_code: string;
}

export interface Property3 {
  lockBox: any;
  hostProperty: any;
  totalLikedPropertyCount: any;
  propertyRates: any;
  guestProperty: GuestProperty[];
  totalCount: number;
  totalPastBookingCount: number;
  selecetedGuestProperty: SelecetedGuestProperty;
  PastBookingProperty: any[];
  reviews: any[];
}

export interface GuestProperty {
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
  ObjOwner: ObjOwner2;
  ObjSysMediaFile: ObjSysMediaFile2[];
  ObjBookedBy: ObjBookedBy;
}

export interface ObjOwner2 {
  Name: string;
  PhoneNo: string;
}

export interface ObjSysMediaFile2 {
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

export interface SelecetedGuestProperty {}

export interface Guest3 {
  guestDetail: any[];
  arrGuests: any[];
  languageDetail: any[];
  docsDetails: any[];
  arrRequestedDocumentByProperty: any[];
  guestDocDetails: any[];
  statusTag: any[];
  arrGuestUploadedDocuments: any[];
  arrGuestUploadedDocumentsAll: any[];
}

export interface Persist {
  version: number;
  rehydrated: boolean;
}
