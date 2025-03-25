export const ApiCollection = {
  auth: {
    login: '/user/login',
    signUp: '/user/signup',
    verifyOtp: '/User/VerifyOTP',
    MobileOtp: '/otp-verify-mobile',
    resendOtp: '/User/ResendOTP',
    changePassword: '/user/ChangePassword',
    forgotPassword: '/User/ForgotPassword',
    updatePassword: '/user/updatepassword',
    guestLogin: '/Booking/linkBooking',
    updateProfile: '/User/Update',
  },
  guest: {
    addGuest: '/Booking/addUpdateGuest',
    getLanguages: '/SysRefLanguage/getAll',
    propertyReviewQuestions: '/ReviewHostQuestion/List',
    insertReview: '/Review/Create',
  },

  notification: {
    getNotifications: '/Notification/GetList',
  },
  property: {
    getReviews: '/Review/List',
  },
  search: {
    searchProperty: '/Property/searchProperty',
  },
};
