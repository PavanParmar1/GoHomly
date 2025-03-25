export interface MyBookingItem {
  title: string;
  image: string;
  guestDetail: string;
  travelDate: string;
  bookingId: string;
  isLiked: true;
}

export interface MyBookingItemImages {
  image: string;
}
let subItem1: MyBookingItemImages = {
  image: require('../../../assets/images/home/my-booking/ic_booking_1.png'),
  // image: {
  //   uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_1.jpg',
  // },
};
let subItem2: MyBookingItemImages = {
  image: require('../../../assets/images/home/my-booking/ic_booking_2.png'),
  // image: {
  //   uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_2.png',
  // },
};

let subItem3: MyBookingItemImages = {
  image: require('../../../assets/images/home/my-booking/ic_booking_3.png'),
  // image: {
  //   uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_3.png',
  // },
};
let item1: MyBookingItem = {
  title: 'Entertainment',
  // image: {
  //   uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_1.png',
  // },
  // overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
  address: 'Main street, London',
  description: 'London, United Kingdom',
  images: [subItem1],
  guestDetail: '2 Adults, 2 Children, 1 Infants, 1 Pet',
  travelDate: '22 Dec - 24 Dec',
  bookingId: '125436',
  isLiked: false,
};
let item2: MyBookingItem = {
  title: 'Entert  ainment',
  // image: {
  //   uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_2.png',
  // },
  // overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
  address: 'Main street, London',
  description: 'London, United Kingdom',
  images: [subItem1, subItem2],
  guestDetail: '2 Adults, 0 Children, 1 Infants, 1 Pet',
  travelDate: '28 Dec - 29 Dec',
  bookingId: '125436',
  isLiked: true,
};
let item3: MyBookingItem = {
  title: 'Entertainment',
  // image: {
  //   uri: 'https://static-hapa-images.s3.eu-west-2.amazonaws.com/home/ongoing-booking/ic_booking_2.png',
  // },
  // overlay: require('../../../assets/images/home/ongoing-booking/booking_overlay.png'),
  address: 'Main street, London',
  description: 'London, United Kingdom',
  images: [subItem1, subItem2, subItem3],
  guestDetail: '2 Adults, 0 Children, 1 Infants, 1 Pet',
  travelDate: '28 Dec - 29 Dec',
  bookingId: '125436',
  isLiked: true,
};

export const AllMyBookingItems: [MyBookingItem] = [];
AllMyBookingItems.push(item1);
AllMyBookingItems.push(item2);
AllMyBookingItems.push(item3);
console.debug(AllMyBookingItems);

export const loadingMyBookingItemsData: MyBookingItem[] = [];
loadingMyBookingItemsData.push(item1);
console.debug(loadingMyBookingItemsData);
