import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from './home-navigator';
// import {MyBookingNavigator} from './my-booking-navigator';
// import {ProfileNavigator} from './profile-navigator';
import {TabIcon} from '../../assets/images/map';
import {SavedPropertyStackNavigator} from './saved-property-stack-navigator';
import {SearchPropertyStackNavigator} from './search-property-stack-navigator';
import {isTablet} from 'react-native-device-info';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {MyBookingNavigator} from './my-booking-navigator';
import {ProfileNavigator} from './profile-navigator';
import useOrientation from '../hooks/useOrientation';
import useSize from '../hooks/useSize';
import tabBarStyle from './styles';

const Tab = createBottomTabNavigator();

export const SearchScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', justifyContent: 'center'}}>
        Search Screen
      </Text>
    </View>
  );
};

export default function TabNavigator() {
  // const getTabBarVisibility = route => {
  //   const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  //   if (routeName === 'propertydetails') {
  //     return false;
  //   }
  //   return true;
  // };

  const {dimensions, orientation} = useOrientation();
  const windowHeight = dimensions.window.height;
  const windowWidth = dimensions.window.width;
  const screenWidth = dimensions.screen.width;

  const {getWidth, getWidthTab} = useSize();
  const styles = tabBarStyle(
    getWidth,
    getWidthTab,
    windowHeight,
    orientation,
    windowWidth,
    screenWidth,
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        // tabBarStyle: getTabBarVisibility1(route) ? styles.tabContainer : null,

        tabBarStyle: (() => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          // console.log(routeName);
          if (
            routeName === 'search' ||
            routeName === 'propertydetails' ||
            routeName === 'bookingDetails' ||
            routeName === 'seeAll' ||
            routeName === 'findYourBooking' ||
            routeName === 'notification' ||
            routeName === 'messages' ||
            routeName === 'Payment' ||
            routeName === 'PaymentSuccess' ||
            routeName === 'propertydetails' ||
            routeName === 'events' ||
            routeName === 'map' ||
            routeName === 'checkOutScreen' ||
            routeName === 'reviewScreen' ||
            routeName === 'webview' ||
            routeName === 'myBookingPropertyDetail' ||
            routeName === 'findYourBooking' ||
            routeName === 'Payment' ||
            routeName === 'PaymentSuccess' ||
            routeName === 'cancelBooking' ||
            routeName === 'termsAndCondition' ||
            routeName === 'searchPropertyScreen' ||
            routeName === 'mySavedPropertyDetail' ||
            // routeName === 'savedPropertyBookingDetail' ||
            routeName === 'personalInfo' ||
            routeName === 'preference' ||
            routeName === 'referrals' ||
            routeName === 'privacyPolicy' ||
            routeName === 'propertyCancellationPolicy' ||
            routeName === 'propertyBookingPolicy' ||
            routeName === 'friendList' ||
            routeName === 'paymentCards' ||
            routeName === 'AddGuest' ||
            routeName === 'GetInProperty' ||
            routeName === 'ViewDocument' ||
            routeName === 'proceedToBooking' ||
            routeName === 'ownerProperty' ||
            routeName === 'PriceSummary' ||
            routeName === 'GuestBookPdf'
          ) {
            return {display: 'none'};
          }
          return styles.tabContainer;
        })(),
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={() => ({
          // tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIcon}>
              <View>
                {isTablet() && Platform.OS === 'android' ? (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.HomeSelected : TabIcon.HomeDefault
                    }
                    accessible={true}
                    accessibilityLabel="HomeDefault Icon"
                  />
                ) : (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.HomeSelected : TabIcon.HomeDefault
                    }
                    accessible={true}
                    accessibilityLabel="HomeDefault Icon"
                  />
                )}
              </View>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Booking Details"
        component={MyBookingNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIcon}>
              <View>
                {isTablet() && Platform.OS === 'android' ? (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.BookingSelected : TabIcon.BookingDefault
                    }
                    accessible={true}
                    accessibilityLabel="BookingDefault Icon"
                  />
                ) : (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.BookingSelected : TabIcon.BookingDefault
                    }
                    accessible={true}
                    accessibilityLabel="BookingDefault Icon"
                  />
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchPropertyStackNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabIconSearch}>
              <View>
                {isTablet() && Platform.OS === 'android' ? (
                  <Image
                    style={{
                      height:
                        orientation === 'landscape' &&
                        screenWidth === windowWidth
                          ? getWidthTab(50)
                          : isTablet()
                            ? getWidthTab(110)
                            : getWidth(47),
                      width:
                        orientation === 'landscape' &&
                        screenWidth === windowWidth
                          ? getWidthTab(50)
                          : isTablet()
                            ? getWidthTab(110)
                            : getWidth(47),
                      marginTop: getWidth(1),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    accessible={true}
                    accessibilityLabel="Search Icon"
                    source={TabIcon.Search}
                  />
                ) : (
                  <Image
                    source={TabIcon.Search}
                    style={{
                      height: isTablet() ? getWidthTab(90) : getWidth(85),
                      width: isTablet() ? getWidthTab(90) : getWidth(85),
                    }}
                    accessible={true}
                    accessibilityLabel="Search Icon"
                  />
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="savedPropertyBookingDetailTab"
        component={SavedPropertyStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIcon}>
              <View>
                {isTablet() && Platform.OS === 'android' ? (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.SavedSelected : TabIcon.SavedDefault
                    }
                    accessible={true}
                    accessibilityLabel="Favourite Icon"
                  />
                ) : (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.SavedSelected : TabIcon.SavedDefault
                    }
                    accessible={true}
                    accessibilityLabel="Favourite Icon"
                  />
                )}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabContainer,
          headerShown: false,
          tabBarVisible: false,
        }}
        options={({}) => ({
          // tabBarStyle: {display: 'flex'},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIcon}>
              <View>
                {isTablet() && Platform.OS === 'android' ? (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.ProfileSelected : TabIcon.ProfileDefault
                    }
                    accessible={true}
                    accessibilityLabel="Profile Icon"
                  />
                ) : (
                  <Image
                    style={styles.iconStyle}
                    source={
                      focused ? TabIcon.ProfileSelected : TabIcon.ProfileDefault
                    }
                    accessible={true}
                    accessibilityLabel="Profile Icon"
                  />
                )}
              </View>
            </View>
          ),
          // tabBarStyle: (route => {
          //   const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          //   console.log(routeName);
          //   if (routeName === 'personalInfo') {
          //     return {display: 'none'};
          //   }
          //   if (routeName === 'referrals') {
          //     return {display: 'none'};
          //   }
          //   if (routeName === 'preference') {
          //     return {display: 'none'};
          //   }
          //   return {display: 'flex'};
          // })(route),
        })}
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <View style={styles.tabIcon}>
        //       <View>
        //         <Image
        //           source={
        //             focused ? TabIcon.ProfileSelected : TabIcon.ProfileDefault
        //           }
        //         />
        //       </View>
        //     </View>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}
