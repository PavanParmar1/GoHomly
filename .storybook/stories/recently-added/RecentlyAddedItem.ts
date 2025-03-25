export interface RecentlyAddedItem {
  title: string;
  image: string;
}

let item1: RecentlyAddedItem = {
  title: 'Greater London',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/recently-added/recently-added-11.jpg',
  },
  overlay: require('../../../assets/images/home/nearest-properties/nearest_properties_overlay.png'),
  address: '29 Main street',
  city: 'London',
  description: 'London',
  isLiked: false,
};

let item2: RecentlyAddedItem = {
  title: 'Central London',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/recently-added/recently-added-2.jpg',
  },
  overlay: require('../../../assets/images/home/nearest-properties/nearest_properties_overlay.png'),
  address: 'Central London',
  city: 'London',
  description: 'Bradford',
  isLiked: false,
};

let item3: RecentlyAddedItem = {
  title: 'City Road',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/recently-added/recently-added-3.jpg',
  },
  overlay: require('../../../assets/images/home/nearest-properties/nearest_properties_overlay.png'),
  address: 'City Road',
  city: 'London',
  description: 'London',
  isLiked: false,
};
let item4: RecentlyAddedItem = {
  title: 'City Road 1',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/recently-added/recently-added-2.jpg',
  },
  overlay: require('../../../assets/images/home/nearest-properties/nearest_properties_overlay.png'),
  address: 'City Road',
  city: 'London',
  description: 'London',
  isLiked: false,
};

export const AllRecentlyAddedItem: [RecentlyAddedItem] = [];

AllRecentlyAddedItem.push(item1);
AllRecentlyAddedItem.push(item2);
AllRecentlyAddedItem.push(item3);
AllRecentlyAddedItem.push(item4);

console.debug(AllRecentlyAddedItem);
