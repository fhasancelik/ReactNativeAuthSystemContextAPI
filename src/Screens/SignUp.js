import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import {colors} from '../utils.js/colors';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp = () => {
  const navigation = useNavigation();

  const [badName, setBadName] = useState(false);
  const [badEmail, setBademail] = useState(false);
  const [badPassword, setBadpassword] = useState(false);
  const[badConfirmPassword,setbadConfirmPassword]=useState(false)
  const [badNumber, setBadNumber] = useState(false);

  const [creuser, setCreUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword:'',
    phonenumber: '',
  });

  const onChangeText = (key, value) => {
    setCreUser({...creuser, [key]: value});
  };

  const handleSignUp = () => {
    console.log(creuser);
    if (creuser.name == '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (creuser.email == '') {
      setBademail(true);
    } else {
      setBademail(false);
    }

    if (creuser.password == '') {
      setBadpassword(true);
    } else {
      setBadpassword(false);
    }
    if(creuser.confirmpassword==''){
        setbadConfirmPassword(true)
    }else if(creuser.confirmpassword!==creuser.password){
        setbadConfirmPassword(true)
    }else{
        setbadConfirmPassword(false)
    }


    if (creuser.phonenumber == '') {
      setBadNumber(true);
    } else {
      setBadNumber(false);
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.maincontainer}>
          <Image
            style={styles.image}
            source={require('../assets/FCoder.png')}
          />
          <Text style={styles.text}> Create New Account</Text>
          <MyTextInput
            onChangeText={text => onChangeText('name', text)}
            placeholder="Enter User Name"
            iconname="person"
            iconsize={25}
          />

          {badName === true && (
            <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
              Please Enter Name{' '}
            </Text>
          )}
          <MyTextInput
            onChangeText={text => onChangeText('email', text)}
            placeholder="Enter Email"
            iconname="mail"
            iconsize={25}
            style={{marginTop: 20}}
          />
          {badEmail === true && (
            <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
              Please Enter Email{' '}
            </Text>
          )}
          <MyTextInput
            onChangeText={text => onChangeText('password', text)}
            placeholder="Enter Password"
            iconname="lock-closed"
            iconsize={25}
            style={{marginTop: 20}}
            type="password"
          />
          {badPassword === true && (
            <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
              Please Enter Password{' '}
            </Text>
          )}
             <MyTextInput
            onChangeText={text => onChangeText('confirmpassword', text)}
            placeholder="Confirm Password"
            iconname="lock-closed"
            iconsize={25}
            style={{marginTop: 20}}
            type="password"
          />
          {badConfirmPassword === true && (
            <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
              Please Confirm Password
            </Text>
          )}
          <MyTextInput
            onChangeText={text => onChangeText('phonenumber', text)}
            placeholder="Enter Phone Number"
            iconname="call"
            keyboardType="number-pad"
            iconsize={25}
            style={{marginTop: 20}}
          />

          {badNumber === true && (
            <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
              Please Enter Phone Number{' '}
            </Text>
          )}
          <MyButton
            onPress={() => handleSignUp()}
            title={'Sign Up'}
            bgColor={colors.black}
            textColor={colors.white}
          />
          <Text onPress={() => navigation.goBack()} style={styles.textbold}>
            Already Have Account ? Login{' '}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  maincontainer: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 50,
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
    marginTop: 50,
    paddingLeft: 20,
  },

  textbold: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    marginBottom: 60,
  },
});

export default SignUp;
