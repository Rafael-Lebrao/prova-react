import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from '../CSS/style';

const input = (props) => {
  return (
    <View style = {styles.input}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#00AD98"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

export default input;