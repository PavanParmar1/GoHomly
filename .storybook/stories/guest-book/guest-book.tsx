import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {GuestBookProps} from './guest-book.props';
import {Divider} from '@rneui/themed';
import {
  CONTAINER,
  HEADER_CONTAINER,
  TITLE,
  SUBTITLE,
  LIST_CONTAINER,
  DIVIDER,
} from './guest-book.presets';
import {GuestBookItem} from './guest-book-items';
// const CaretUp = require('../../../assets/images/Caretup.png');
// const CaretDown = require('../../../assets/images/Caretdown.png');

// const questionAnswers = [
//   {
//     id: 1,
//     question: 'How to use machine?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
//     isExpanded: false,
//   },
//   {
//     id: 2,
//     question: 'What is the Wi-Fi password?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
//     isExpanded: false,
//   },
//   {
//     id: 3,
//     question: 'How to change A/C temperature?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
//     isExpanded: false,
//   },
//   {
//     id: 4,
//     question: 'How to operate dishwasher?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.',
//     isExpanded: false,
//   },
// ];
export default function GuestBook(props: GuestBookProps) {
  const {title, subTitle, query} = props;
  //   const arrQuestion = query;
  const [arrQuestion, setArrQuestion] = useState(query);

  const onPressExpandCollapse = object => {
    let _arrQuestion = arrQuestion;
    _arrQuestion = _arrQuestion.map(item => {
      return {
        ...item,
        isExpanded: item.id === object ? !item.isExpanded : item.isExpanded,
      };
    });
    setArrQuestion([..._arrQuestion]);
  };

  function isEmptyData() {
    let isEmpty = false;
    if (!query || query === undefined || query.length === 0) {
      return isEmpty;
    }
  }

  return (
    <>
      {isEmptyData() && <> </>}
      {!isEmptyData() && (
        <View style={[CONTAINER, props.containerStyle]}>
          <View style={HEADER_CONTAINER}>
            <Text style={TITLE}>{title}</Text>
            <Text style={SUBTITLE}>{subTitle}</Text>
          </View>
          <View style={LIST_CONTAINER}>
            <FlatList
              data={arrQuestion}
              scrollEnabled={false}
              renderItem={item => (
                <GuestBookItem
                  data={item}
                  onPress={id => onPressExpandCollapse(id)}
                />
              )}
              ItemSeparatorComponent={() => <Divider style={DIVIDER} />}
            />
          </View>
        </View>
      )}
    </>
  );
}
