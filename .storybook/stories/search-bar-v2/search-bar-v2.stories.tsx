import * as React from 'react';
import SearchBarV2 from './search-bar-v2';


const searchBarV2Meta = {
  title: 'SearchBarV2',
  component: SearchBarV2,
  argTypes: {
    onChangesText: (text: string) => {
      console.log('Storybook component text : ', text);
    },
  },
  decorators: [
    Story => (
      <>
          <Story />
      </>
    ),
  ],
};
export default searchBarV2Meta;
export const Default = {
  args: {
    onPressItem: () => {console.log('navifgate to search')},
    onIconPress: () => {console.log('filter icon clicked')},
  },
};
