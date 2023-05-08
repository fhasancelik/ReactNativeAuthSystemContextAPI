import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const MyTextInput = ({keyboardType,type,placeholder, onChangeText, iconname,iconsize,iconstyle, value, style}) => {
  return (
    <View style={[styles.container, style]}>
      
      <TextInput
      keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={[styles.input,]}
      secureTextEntry={type==='password'?true:false}
      />

      <Icon name ={iconname} size={iconsize} style={[styles.icon,iconstyle]}/>
    </View>
  );
};

const styles = StyleSheet.create({

container:{
position:'relative',

marginTop: 50,

},

icon:{
  position:'absolute',
  left:40,
  top:10,
  

},
  text: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    alignSelf: 'center',
    width: '85%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
   
    paddingLeft: 45,
  },
});
export default MyTextInput;
