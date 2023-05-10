import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import MyButton from '../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../components/Loader';
import {colors} from '../utils.js/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import WishList from '../bottom/WishList';
import Profile from '../bottom/Profile';
const Home = () => {
  const navigation = useNavigation();

  const [selectedTab,setSelectedTab]=useState(0)

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Kullanıcı oturum açtı:', user.email);
      } else {
        console.log('Kullanıcı oturum açmadı.');
        navigation.navigate('Login');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>

<View style={{flex:1}}>
{selectedTab==0?(<Main/>):selectedTab==1?(<Search/>):selectedTab==2?(<Cart/>):selectedTab==3?(<WishList/>):selectedTab==4?(<Profile/>):null}


</View>


      <View style={styles.bottomtab}>
        <TouchableOpacity onPress={()=>setSelectedTab(0)} style={styles.bottomtabitems}>
          <Icon name="home-outline" size={25} color={selectedTab==0?colors.black:'gray'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setSelectedTab(1)} style={styles.bottomtabitems}>
          <Icon name="search" size={25} color={selectedTab==1?colors.black:'gray'} />
        </TouchableOpacity>

        <View style={{height: '100%',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity

onPress={()=>setSelectedTab(2)}

            style={{
              width:44,height:44,
              backgroundColor: selectedTab==2 ? 'green':colors.black,
              borderRadius: 22,
              alignItems:'center',
              justifyContent:'center'
            }}>
                       <Icon name="basket-outline" color={colors.white} size={25} />
            </TouchableOpacity>
        </View>

        <TouchableOpacity
        
        onPress={()=>setSelectedTab(3)}
        style={styles.bottomtabitems}>
          <Icon name="heart-outline" size={25} color={selectedTab==3?colors.black:'gray'} />
        </TouchableOpacity>

        <TouchableOpacity 
        
        onPress={()=>setSelectedTab(4)}
        style={styles.bottomtabitems}>
          <Icon name="person-outline" color={selectedTab==4?colors.black:'gray'} size={25} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomtab: {
    width: '100%',
    height: 70,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  bottomtabitems: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
