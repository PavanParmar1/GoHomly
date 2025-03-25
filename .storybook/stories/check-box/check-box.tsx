import React, {useState, useEffect} from 'react';
import {CheckBox} from '@rneui/themed';
import {CheckBoxProps} from './check-box.props';
import {
  CONTAINER,
  SELECTION_CONTAINER,
  WRAPPER,
  SELECTION_WRAPPER,
  TEXT,
  DISABLED_CHECKBOX,
  DISABLED_TITLE,
} from './check-box.presets';
import {windowWidth} from '../../../app/utils/common';
import {isTablet} from 'react-native-device-info';

const size = isTablet() ? (windowWidth / 100) * 3 : (windowWidth / 100) * 5;
export default function CheckBoxComponent(props: CheckBoxProps) {
  // const BOX_CHECKED_ICON = (
  //   <Icon
  //     name="check-box"
  //     type="material"
  //     color="#FF646C"
  //     size={(windowWidth / 100) * 6}
  //     iconStyle={ICON_STYLE}
  //   />
  // );
  // const BOX_UNCHECKED_ICON = (
  //   <Icon
  //     name="check-box-outline-blank"
  //     type="material"
  //     color="grey"
  //     size={(windowWidth / 100) * 6}
  //     iconStyle={ICON_STYLE}
  //   />
  // );
  // const RADIO_CHECKED_ICON = (
  //   <Icon
  //     name="radio-button-checked"
  //     type="material"
  //     color="#FF646C"
  //     size={(windowWidth / 100) * 6}
  //     iconStyle={ICON_STYLE}
  //   />
  // );
  // const RADIO_UNCHECKED_ICON = (
  //   <Icon
  //     name="radio-button-unchecked"
  //     type="material"
  //     color="grey"
  //     size={(windowWidth / 100) * 6}
  //     iconStyle={ICON_STYLE}
  //   />
  // );
  // const TOGGLE_CHECKED_ICON = (
  //   <Icon
  //     name="toggle-on"
  //     type="material"
  //     color="#FF646C"
  //     size={(windowWidth / 100) * 6}
  //     iconStyle={ICON_STYLE}
  //   />
  // );
  // const TOGGLE_UNCHECKED_ICON = (
  //   <Icon
  //     name="toggle-off"
  //     type="material"
  //     color="grey"
  //     size={(windowWidth / 100) * 6}
  //     iconStyle={ICON_STYLE}
  //   />
  // );
  // const [checkedIcon, setCheckedIcon] = useState(BOX_CHECKED_ICON);
  // const [unCheckedIcon, setUnCheckedIcon] = useState(BOX_UNCHECKED_ICON);

  // const [checkType] = useState(() => {
  //   if (props.checkBoxType) {
  //     switch (props.checkBoxType) {
  //       case 'Box':
  //         setCheckedIcon(BOX_CHECKED_ICON);
  //         setUnCheckedIcon(BOX_UNCHECKED_ICON);
  //         return props.checkBoxType;
  //       case 'Radio':
  //         setCheckedIcon(RADIO_CHECKED_ICON);
  //         setUnCheckedIcon(RADIO_UNCHECKED_ICON);
  //         return props.checkBoxType;

  //       case 'Toggle':
  //         setCheckedIcon(TOGGLE_CHECKED_ICON);
  //         setUnCheckedIcon(TOGGLE_UNCHECKED_ICON);
  //         return props.checkBoxType;
  //       default:
  //         setCheckedIcon(BOX_CHECKED_ICON);
  //         setUnCheckedIcon(BOX_UNCHECKED_ICON);
  //         return 'Box';
  //     }
  //   } else {
  //     setCheckedIcon(BOX_CHECKED_ICON);
  //     setUnCheckedIcon(BOX_UNCHECKED_ICON);
  //     return 'Box';
  //   }
  // });
  const [container, setContainer] = useState(CONTAINER);
  const [wrapper, setWrapper] = useState(WRAPPER);
  const [itemChecked, setItemChecked] = useState(false);

  useEffect(() => {
    if (!itemChecked) {
      setContainer(CONTAINER);
      setWrapper(WRAPPER);
    } else {
      setContainer(SELECTION_CONTAINER);
      setWrapper(SELECTION_WRAPPER);
    }
  }, [itemChecked]);

  function clickHandler() {
    setItemChecked(item => !item);
    if (props.onValueChange) {
      props.onValueChange(!itemChecked);
    }
  }
  // const _container = [CONTAINER, props.containerStyle];
  return (
    <CheckBox
      //   Component = {{}}
      iconRight={props.iconRight}
      title={props.title || 'select me'}
      titleProps={props.titleProps}
      center={props.center || false}
      right={props.right || false}
      containerStyle={props.containerStyle || container}
      wrapperStyle={props.wrapperStyle || wrapper}
      textStyle={props.textStyle || TEXT}
      disabled={props.disabled || false}
      disabledStyle={props.disabledStyle || DISABLED_CHECKBOX}
      disabledTitleStyle={props.disabledTitleStyle || DISABLED_TITLE}
      checkedTitle={props.checkedTitle || 'select me'}
      //   fontFamily = {{}}
      /*
       * props for checked and unchecked Icon
       */
      onPress={clickHandler}
      checked={props.checked || false}
      //   onIconPress={() => {}}
      //   onLongIconPress={() => {}}
      size={props.size || size} //icon size
      checkedIcon={props.checkedIcon || 'done'}
      uncheckedIcon={props.uncheckedIcon || 'done'}
      iconType={props.iconType || 'material'}
      checkedColor={props.checkedColor || '#121212'}
      uncheckedColor={props.uncheckedColor || '#ffffff'}
    />
  );
}
