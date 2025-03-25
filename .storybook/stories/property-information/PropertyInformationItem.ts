export interface PropertyInformationItem {
  title: string;
  subTitle: string;
  beds: string;
  bath: string;
  area: string;
  houseType: string;
  houseTypeDetail: string;
  hasRating: boolean;
}

export const PropertyInfoWithValue: PropertyInformationItem = {
  title: '139 North West Street',
  subTitle: 'Machester Main Road',
  beds: '1',
  bath: '1',
  area: '1000',
  houseType: 'Appartment -',
  houseTypeDetail: 'Double Room (1)',
  hasRating: true,
};
