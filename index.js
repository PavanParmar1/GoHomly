/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NewRelic from 'newrelic-react-native-agent';
import * as appVersion from './package.json';

let appToken;

//hapa-test key
// if (Platform.OS === 'ios') {
//   appToken = 'eu01xx0eeff00306f69bc14c055b0eb85004611426-NRMA';
// } else {
//   appToken = 'eu01xx506345effdd432b9ebabfda0d1f52037b530-NRMA';
// }

//hapa-prod key
if (Platform.OS === 'ios') {
  appToken = 'eu01xx553777335da881fb490d46b8a88d75601c37-NRMA';
} else {
  appToken = 'eu01xxc1a0f4ce59532775a83cfe01bfc67e07a1ea-NRMA';
}

const agentConfiguration = {
  //Android Specific
  // Optional:Enable or disable collection of event data.
  analyticsEventEnabled: true,

  // Optional:Enable or disable crash reporting.
  crashReportingEnabled: true,

  // Optional:Enable or disable interaction tracing. Trace instrumentation still occurs, but no traces are harvested. This will disable default and custom interactions.
  interactionTracingEnabled: true,

  // Optional:Enable or disable reporting successful HTTP requests to the MobileRequest event type.
  networkRequestEnabled: true,

  // Optional:Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
  networkErrorRequestEnabled: true,

  // Optional:Enable or disable capture of HTTP response bodies for HTTP error traces, and MobileRequestError events.
  httpResponseBodyCaptureEnabled: true,

  // Optional:Enable or disable agent logging.
  loggingEnabled: true,

  // Optional:Specifies the log level. Omit this field for the default log level.
  // Options include: ERROR (least verbose), WARNING, INFO, VERBOSE, AUDIT (most verbose).
  logLevel: NewRelic.LogLevel.INFO,

  // iOS Specific
  // Optional:Enable/Disable automatic instrumentation of WebViews
  webViewInstrumentation: true,

  // Optional:Set a specific collector address for sending data. Omit this field for default address.
  // collectorAddress: "",

  // Optional:Set a specific crash collector address for sending crashes. Omit this field for default address.
  // crashCollectorAddress: ""
};

// NewRelic.startWithApplicationToken(appToken);
NewRelic.startAgent(appToken, agentConfiguration);
NewRelic.setJSAppVersion(appVersion.version);
AppRegistry.registerComponent(appName, () => App);
