export interface NearestPropetyItem {
  title: string;
  image: string;
}

let item1: NearestPropetyItem = {
  title: 'Oxford Street',
  // image: require('../../../assets/images/home/nearest-properties/nearestProperties.png'),
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/nearest-properties/nearestProperties.png',
  },
  overlay: require('../../../assets/images/home/nearest-properties/nearest_properties_overlay.png'),
  address: '29 Main street',
  city: 'London',
  description: 'London',
  liked: false,
};

let item2: NearestPropetyItem = {
  title: 'Baker Street',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/nearest-properties/nearestProperties-8.png',
  },
  overlay: require('../../../assets/images/home/nearest-properties/nearest_properties_overlay.png'),
  address: 'Hartmann Rd ',
  city: 'London',
  description: 'Bradford',
  liked: false,
};

let item3: NearestPropetyItem = {
  title: 'Portobello Road',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/nearest-properties/nearest_properties_1.png',
  },
  overlay: require('../../../assets/images/home/nearest-properties/nearest_properties_overlay.png'),
  address: 'London E16 2PX ',
  city: 'London',
  description: 'London',
  liked: true,
};

export const AllNearestPropetyItem: [NearestPropetyItem] = [];

AllNearestPropetyItem.push(item1);
AllNearestPropetyItem.push(item2);
AllNearestPropetyItem.push(item3);

console.debug(AllNearestPropetyItem);
