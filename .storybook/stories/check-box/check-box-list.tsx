import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import CheckBoxComponent from './check-box';

export default function CheckBoxList() {
  const DATA = [
    'York',
    'Worcester',
    'Wolverhampton',
    'Winchester',
    'Westminster',
    'Wells',
    'Wakefield',
    'Truro',
    'Swansea',
    'Sunderland',
    'Stoke-on-Trent',
    'Stirling',
    'St Davids',
    'St Asaph',
    'St Albans',
    'Southend-on-Sea',
    'Southampton',
    'Sheffield',
    'Salisbury',
    'Salford',
    'Ripon',
    'Preston',
    'Portsmouth',
    'Plymouth',
    'Peterborough',
    'Perth',
    'Oxford',
    'Nottingham',
    'Norwich',
    'Newry',
    'Newport',
    'Newcastle upon Tyne',
    'Manchester',
    'Liverpool',
    'Lisburn',
    'Lincoln',
    'Lichfield',
    'Leicester',
    'Leeds',
    'Lancaster',
    'Kingston',
    'Inverness',
    'Hereford',
    'Gloucester',
    'Glasgow',
    'Exeter',
    'Ely',
    'Edinburgh',
    'Durham',
    'Dundee',
    'Derry',
    'Derby',
    'Coventry',
    'London',
    'Chichester',
    'Chester',
    'Chelmsford',
    'Carlisle',
    'Cardiff',
    'Canterbury',
    'Cambridge',
    'Bristol',
    'Bradford',
    'Birmingham',
    'Belfast',
    'Bath',
    'Bangor',
    'Armagh',
    'Aberdeen',
  ];
  const [selectedCities, setSelectedCities] = useState(['']);
  //   //   const [selectedValue, setSelectedValue] = useState(['']);
  useEffect(() => {
    console.log('props ' + selectedCities);
  }, [selectedCities]);
  function chosenCities(city: any, isSelected: any) {
    if (isSelected === true) {
      setSelectedCities([...selectedCities, city]);
      // console.log('props true ' + selectedCities);
    } else if (isSelected === false) {
      setSelectedCities(selectedCities.filter(value => value !== city));
      // console.log('props false ' + selectedCities);
    }
  }
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={item => (
          <CheckBoxComponent
            title={item.item}
            checkedTitle={item.item}
            // checked={citySelected}
            onPress={chosenCities}
          />
        )}
        // keyExtractor={DATA.index}
      />
    </View>
  );
}
