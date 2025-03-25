export interface OnGoingBookingItem {
  title: string;
  image: string;
}

export interface OnGoingBookingItemImages {
  image: string;
}
let subItem1: OnGoingBookingItemImages = {
  image: require('../../../assets/images/home/my-booking/ic_booking_1.png'),
};
let subItem2: OnGoingBookingItemImages = {
  image: require('../../../assets/images/home/my-booking/ic_booking_1.png'),
};

let subItem3: OnGoingBookingItemImages = {
  image: require('../../../assets/images/home/my-booking/ic_booking_1.png'),
};
let item1: OnGoingBookingItem = {
  title: 'Entertainment',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_1.png',
  },
  overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
  address: '29 Main street, London',
  description: 'Joe +2 person',
  images: [subItem1, subItem2, subItem3],
};

let item2: OnGoingBookingItem = {
  title: 'Entert  ainment',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_2.png',
  },
  overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
  address: 'Hartmann Rd, London E16 2PX',
  description: 'Bill +2 person',
  images: [subItem1, subItem2],
};

let item3: OnGoingBookingItem = {
  title: 'Entertainment',
  image: {
    uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_3.png',
  },
  overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
  address: 'Silverton road, London',
  description: 'Larry +2 person',
  images: [subItem1],
};
export const AllOnGoingItems: [OnGoingBookingItem] = [];

AllOnGoingItems.push(item1);
AllOnGoingItems.push(item2);
AllOnGoingItems.push(item3);
console.debug(AllOnGoingItems);

export const loadingOnGoingItemsData: OnGoingBookingItem[] = [];
loadingOnGoingItemsData.push(item1);
console.debug(loadingOnGoingItemsData);
