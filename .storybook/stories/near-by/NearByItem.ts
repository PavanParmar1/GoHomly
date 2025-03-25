export interface NearByItem {
  title: string;
  image: string;
}

let item1: NearByItem = {
  title: 'Event',
  image: require('../../../assets/images/home/near-by/ic_event.png'),
};

let item2: NearByItem = {
  title: 'Shopping',
  image: require('../../../assets/images/home/near-by/ic_shopping.png'),
};

let item3: NearByItem = {
  title: 'Food',
  image: require('../../../assets/images/home/near-by/ic_food.png'),
};

let item4: NearByItem = {
  title: 'Attraction',
  image: require('../../../assets/images/home/near-by/ic_attraction.png'),
};

let item5: NearByItem = {
  title: 'Entertainment',
  image: require('../../../assets/images/home/near-by/ic_entertainment.png'),
};

let item6: NearByItem = {
  title: 'Spa',
  image: require('../../../assets/images/home/near-by/ic_spa.png'),
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
