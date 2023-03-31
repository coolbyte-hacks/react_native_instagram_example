import React from 'react';
import {View, Text} from 'react-native';
import colours from './src/theme/colors';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colours.primary, fontSize: font.size.xxlg}}>
        Hello World!
      </Text>
      <AntDesign name="stepforward" size={30} />
    </View>
  );
};

export default App;
