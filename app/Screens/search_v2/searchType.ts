export interface searchProperty {
  IsSuccess: boolean;
  Message: string;
  Data: [
    {
      Id: number;
      PropertyType: string;
      PropertyName: string;
      LocationName: string;
      Address: string;
      RatePerNight: number;
      CoverPhotoUrl: string;
      MaxPersonCanStay: number;
      BedRoomsCount: number;
      BathroomsCount: number;
      KitchenCount: number;
      LodgingFlgPetsAllowed: boolean;
      LodgingFlgSmokingAllowed: boolean;
      LodgingFlgEventsAllowed: boolean;
      LodgingFlgChildrenAllowed: boolean;
      FlgFavorite: boolean;
      PropertyRating: number;
      PropertyLat: number;
      PropertyLong: number;
      Layout: {
        BedRooms: [
          {
            Name: string;
            NoOfBeds: number;
            PersonCanSleep: number;
            FlgPrivateBathRoom: boolean;
          },
        ];
        LivingRooms: [
          {
            Name: string;
            NoOfBeds: number;
            PersonCanSleep: number;
            FlgPrivateBathRoom: boolean;
          },
        ];
      };
    },
  ];
  TotalCount: number;
}

export interface guestParam {
  adult: number;
  flgChildrenAllowed: boolean;
  flgPetsAllowed: boolean;
}

export interface LayoutTypes {
  BedRooms: [
    {
      Name: string;
      NoOfBeds: number;
      PersonCanSleep: number;
      FlgPrivateBathRoom: boolean;
    },
  ];
  LivingRooms: [
    {
      Name: string;
      NoOfBeds: number;
      PersonCanSleep: number;
      FlgPrivateBathRoom: boolean;
    },
  ];
}

export interface nearByRenderItem {
  id: any;
  image: number;
  title: string;
  type: string;
}

export interface whenDateTye {
  end: number;
  start: number;
}

export interface SearchParamsTypes {
  when: When;
  where: Where;
  who: Who;
}

export interface When {
  end: Date;
  start: Date;
}

export interface Where {
  latitude: number;
  location: string;
  longitude: number;
}

export interface Who {
  adult: number;
  flgChildrenAllowed: boolean;
  flgPetsAllowed: boolean;
  flgPetAllowed: boolean;
  flgDisabledAllowed: boolean;
}

export interface LocationType {
  address_components: any[];
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
  location: Location;
  location_type: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface PlusCode2 {
  compound_code: string;
  global_code: string;
}

export interface sectionTypes {
  content: Content[];
  title: string;
  length: number;
}

export interface Content {
  title: string;
}
