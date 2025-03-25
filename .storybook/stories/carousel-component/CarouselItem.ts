export interface CarouselItem {
  title: string;
  AWSThumbNailRelativePath: string;
}

let item1: CarouselItem = {
  title: 'Oxford Street',
  AWSThumbNailRelativePath: require('../../../assets/images/home/nearest-properties/nearest_properties_1.png'),
  // ../../../assets/images/home/nearest-properties/nearest_properties_1.png
};

let item2: CarouselItem = {
  title: 'Baker Street',
  AWSThumbNailRelativePath: require('../../../assets/images/home/nearest-properties/nearest_properties_2.png'),
};

let item3: CarouselItem = {
  title: 'Portobello Road',
  AWSThumbNailRelativePath: require('../../../assets/images/home/nearest-properties/nearest_properties_1.png'),
};

export const AllCarouselItem: [CarouselItem] = [];

AllCarouselItem.push(item1);
AllCarouselItem.push(item2);
AllCarouselItem.push(item3);

console.debug(AllCarouselItem);
