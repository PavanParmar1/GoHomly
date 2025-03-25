export interface HighestRatedItem {
  title: string;
  image: string;
}

let item1: HighestRatedItem = {
  title: 'Oxford Street',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/highest-rated/higest-rated-1.jpg',
  },
  overlay: require('../../../assets/images/home/highest-rated/highest-rated-overlay.png'),
  address: '29 Main street',
  distance: '1.5km away',
  city: 'London',
  description: 'London',
  isLiked: true,
};

let item2: HighestRatedItem = {
  title: 'Baker Street',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/highest-rated/higest-rated-2.jpg',
  },
  overlay: require('../../../assets/images/home/highest-rated/highest-rated-overlay.png'),
  address: 'Hartmann Rd',
  distance: '1.8km away',
  city: 'London',
  description: 'Bradford',
  isLiked: false,
};

let item3: HighestRatedItem = {
  title: 'Portobello Road',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/highest-rated/higest-rated-3.jpg',
  },
  overlay: require('../../../assets/images/home/highest-rated/highest-rated-overlay.png'),
  address: 'Hartmann Rd',
  distance: '2.5km away',
  city: 'London',
  description: 'London',
  isLiked: false,
};

export const AllHighestRatedItem: [HighestRatedItem] = [];

AllHighestRatedItem.push(item1);
AllHighestRatedItem.push(item2);
AllHighestRatedItem.push(item3);

console.debug(AllHighestRatedItem);
