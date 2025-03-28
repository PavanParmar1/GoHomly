import createLoadingPlugin from '@rematch/loading';

export const loadingPlugin = createLoadingPlugin({
  whitelist: [
    'Auth/signUp',
    'Auth/signIn',
    'Auth/verifyOtp',
    'Auth/resendOtp',
    'Auth/guestLogin',
    'Search/searchProperty',
    'Guest/getGuest',
    'Guest/addGuest',
    'Guest/uploadDocument',
    'Guest/getListOfGuests',
    'Property/guestPropertyDetail',
    'Property/onGoingBooking',
    'Property/getPastBooking',
    'Property/likeProperty',
    'Property/unlikeProperty',
    'Property/getLikedProperty',
    'Property/getReviews',
    'Notification/getNotifications',
    'Auth/forgotPassword',
    'Auth/updatePassword',
    'Auth/changePassword',
    'Notification/getNotifications',
    'Search/propertyDetail',
    'Property/getPropertyRates',
  ],
});
