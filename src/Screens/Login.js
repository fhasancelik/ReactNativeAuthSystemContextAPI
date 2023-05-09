import {View, Text, StyleSheet, Image, TextInput,Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import {colors} from '../utils.js/colors';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Loader from '../components/Loader';

const Login = () => {
  const navigation = useNavigation();
  const [badEmail, setBademail] = useState(false);
  const [badPassword, setBadpassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [loguser, setLogUser] = useState({
    email: '',
    password: '',
  });

  const onChangeText = (key, value) => {
    setLogUser({...loguser, [key]: value});
  };
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Kullanıcı oturum açtı:', user.email);
        setModalVisible(false);
        navigation.navigate('Home');
      } else {
        console.log('Kullanıcı oturum açmadı.');
    
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    console.log('merhaba');
    
    if (loguser.email == '' || loguser.password == '') {
      if (loguser.email == '') {
        setBademail(true);
      } else {
        setBademail(false);
      }

      if (loguser.password == '') {
        setBadpassword(true);
      } else {
        setBadpassword(false);
      }
    } else {
      setModalVisible(true);
      auth()
        .signInWithEmailAndPassword(loguser.email, loguser.password)
        .then(userCredential => {
          // Kullanıcı başarıyla giriş yaptı
          console.log('Kullanıcı giriş yaptı:', userCredential.user);

          setLogUser({
            email: '',
            password: '',
          });

          setBademail(false);
          setBadpassword(false);
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
      <View style={styles.maincontainer}>
        <Image style={styles.image} source={require('../assets/FCoder.png')} />
        <Text style={styles.text}> Login</Text>
        <MyTextInput
          value={loguser.email}
          onChangeText={text => onChangeText('email', text)}
          placeholder="Enter Email"
          iconname="mail"
          iconsize={25}
        />
        {badEmail === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please Enter Email{' '}
          </Text>
        )}
        <MyTextInput
          value={loguser.password}
          onChangeText={text => onChangeText('password', text)}
          placeholder="Enter Password"
          iconname="lock-closed"
          iconsize={25}
          style={{marginTop: 20}}
          type="password"
        />
        <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
        {badPassword === true && (
          <Text style={{marginTop: 10, marginLeft: 30, color: 'red'}}>
            Please Enter Password
          </Text>
        )}
        <MyButton
          onPress={() => handleLogin()}
          title={'Login'}
          bgColor={colors.black}
          textColor={colors.white}
        />
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={styles.textbold}>
          Create New Account
        </Text>
      </View>
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
    marginTop: 100,
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
  },
});

export default Login;
