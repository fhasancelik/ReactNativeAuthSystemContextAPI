import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React, {useState,useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import {colors} from '../utils.js/colors';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';


const SignUp = () => {
  const navigation = useNavigation();

  const [badName, setBadName] = useState(false);
  const [badEmail, setBademail] = useState(false);
  const [badPassword, setBadpassword] = useState(false);
  const [badConfirmPassword, setbadConfirmPassword] = useState(false);
  const [badNumber, setBadNumber] = useState(false);
  const[comptSignup,setcomptSignup]=useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const [creuser, setCreUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    phonenumber: '',
  });

  const getDatas = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
useEffect(()=>{
  getDatas()
},[])
  const onChangeText = (key, value) => {
    setCreUser({...creuser, [key]: value});
  };


  const storeData = async value => {
    try {
      const creuser = JSON.stringify(value);
      await AsyncStorage.setItem('user', creuser);
    } catch (e) {
      // saving error
    }
  };



  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Kullanıcı oturum açtı:', user.email);
        setModalVisible(false)
        navigation.navigate('Home')
      } else {
        console.log('Kullanıcı oturum açmadı.');
      }
    });

    return () => unsubscribe();
  }, []);




  const handleSignUp = () => {
    console.log(creuser);

    if (creuser.email == '' || creuser.password == '') {
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
      if (creuser.confirmpassword == '') {
        setbadConfirmPassword(true);
      } else if (creuser.confirmpassword !== creuser.password) {
        setbadConfirmPassword(true);
      } else {
        setbadConfirmPassword(false);
      }

      if (creuser.phonenumber == '') {
        setBadNumber(true);
      } else {
        setBadNumber(false);
      }
    } else {

      setModalVisible(true)

      auth()
        .createUserWithEmailAndPassword(creuser.email, creuser.password)
        .then(userCredential => {
          // Kullanıcı başarıyla oluşturuldu
          console.log('Kullanıcı oluşturuldu:', userCredential.user);

          storeData(creuser);
        

          setCreUser({
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            phonenumber: '',
          });

      
        })
        .catch(error => {
          // Hata durumunda işlemler
          console.log('Hata:', error.code, error.message);
          setModalVisible(false)
          Alert.alert('Try Again')
        });
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
            value={creuser.name}
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
            value={creuser.email}
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
            value={creuser.password}
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
            value={creuser.confirmpassword}
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
            value={creuser.phonenumber}
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


<Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />



          <MyButton
            onPress={() => handleSignUp()}
            title={'Sign Up'}
            bgColor={colors.black}
            textColor={colors.white}
          />


<MyButton
            onPress={() => getDatas()}
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
