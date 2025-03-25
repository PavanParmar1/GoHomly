import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {App} from '../../../assets/images/map';
import PersonalInfo from '../../../.storybook/stories/personal-info/personal-info';
import {useSelector} from 'react-redux';
import {Root} from '../../rematch/types/store.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../navigators/profile-navigator';
import useSize from '../../hooks/useSize';

type PersonalInfoNavigationProp = NativeStackNavigationProp<
  NavigatorParamList,
  'personalInfo'
>;

interface PersonalInfoProps {
  navigation: PersonalInfoNavigationProp;
}

const PersonalInformation: React.FC<PersonalInfoProps> = ({navigation}) => {
  const {navbarHeader, navbarImage, navbarTitle} = useSize();

  const userDetails = useSelector((state: Root) => state.Auth.auth);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back"
          style={navbarHeader}
          onPress={() => navigation.pop()}>
          <Image style={navbarImage} source={App.Back} resizeMode={'contain'} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Text style={navbarTitle}>{'Personal Info'}</Text>,
    });
  }, [navigation]);

  return (
    <PersonalInfo
      firstName={userDetails.Data.FirstName}
      lastName={userDetails.Data.LastName}
      email={userDetails.Data.Email}
      phoneNumber={userDetails.Data.MobileNo}
      id={userDetails.Data.Id}
      onPress={() => navigation.pop()}
    />
  );
};
export default PersonalInformation;
