import React from 'react';
import {PropertyFacilitiesProps} from './property-facilities.props';
import {TagSelect} from 'react-native-tag-select';
import {
  ITEM_STYLE,
  ITEM_STYLE_SELECTED,
  LABEL_STYLE,
  LABEL_STYLE_SELECTED,
} from './property-facilities.presets';

export default function PropertyFacilities(props: PropertyFacilitiesProps) {
  const facilities = props.options;
  return (
    <TagSelect
      data={facilities}
      itemStyle={ITEM_STYLE}
      itemStyleSelected={ITEM_STYLE_SELECTED}
      itemLabelStyle={LABEL_STYLE}
      itemLabelStyleSelected={LABEL_STYLE_SELECTED}
    />
  );
}
