import * as React from 'react';
import SerachBoottomSheet from './search-bottom-sheet';


const SerachBoottomSheetMeta = {
  title: 'SerachBoottomSheet',
  component: SerachBoottomSheet,
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
export default SerachBoottomSheetMeta;
export const Default = {
  args: {
    onPressItem: () => {console.log('navifgate to search')},
    onIconPress: () => {console.log('filter icon clicked')},
  },
};
