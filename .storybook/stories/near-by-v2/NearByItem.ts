import { colors } from "../../../app/theme";

export interface NearByItem {
  id: number;
  title: string;
  image: string;
  type: string;
  backColor: string;
  titleColor: string;
  icon: string;
  isSelected: boolean;
}

let item1: NearByItem = {
  id: 1,
  title: 'Movies',
  image: require('../../../assets/images/search/nearby/movie.png'),
  type: 'movie|theater',
  backColor: '#FEB6A6',
  titleColor: 'black',
  icon: require('../../../assets/images/map_bb.png'),
  isSelected: false,
};

let item2: NearByItem = {
  id: 2,
  title: 'Event',
  image: require('../../../assets/images/search/nearby/event.png'),
  type: 'tourist|attraction',
  backColor: colors.secondary,
  titleColor: 'white',
  icon: require('../../../assets/images/map_aa.png'),
  isSelected: false,
};

let item3: NearByItem = {
  id: 3,
  title: 'Shopping',
  image: require('../../../assets/images/search/nearby/shopping.png'),
  type: 'shopping|market|store|supermarket|mall',
  backColor: '#FEB6A6',
  titleColor: 'black',
  icon: require('../../../assets/images/search/nearby/shopping_black.png'),
  isSelected: false,
};

let item4: NearByItem = {
  id: 4,
  title: 'Food',
  image: require('../../../assets/images/search/nearby/food.png'),
  type: 'restaurant|cafe|food|pizza',
  backColor: '#FFA91C',
  titleColor: 'white',
  icon: require('../../../assets/images/search/nearby/food_white.png'),
  isSelected: false,
};

let item5: NearByItem = {
  id: 5,
  title: 'Attraction',
  image: require('../../../assets/images/search/nearby/attraction.png'),
  type: 'tourist|attraction|amusement park|art gallery|aquarium|temple|church|zoo|mosque',
  backColor: colors.secondary,
  titleColor: 'white',
  icon: require('../../../assets/images/search/nearby/attraction_white.png'),
  isSelected: false,
};

let item6: NearByItem = {
  id: 6,
  title: 'Spa',
  image: require('../../../assets/images/search/nearby/spa.png'),
  type: 'spa',
  backColor: '#F24987',
  titleColor: 'white',
  icon: require('../../../assets/images/map_cc.png'),
  isSelected: false,
};

export const AllItems: [NearByItem] = [];

AllItems.push(item1);
AllItems.push(item2);
AllItems.push(item3);
AllItems.push(item4);
AllItems.push(item5);
AllItems.push(item6);

console.debug(AllItems);

export const loadingData: NearByItem[] = [];
loadingData.push(item1);
loadingData.push(item2);
loadingData.push(item3);
loadingData.push(item4);
console.debug(loadingData);
