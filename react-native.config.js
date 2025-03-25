module.exports = {
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
    android: {},
  },
  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
  },
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  assets: ['./assets/fonts/'],
};
