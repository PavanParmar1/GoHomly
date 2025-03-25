import {getStorybookUI, configure} from '@storybook/react-native';

import './storybook.requires';

const StorybookUIRoot = getStorybookUI({});

// configure(() => {
//   require('./stories');
// }, module);

export default StorybookUIRoot;
