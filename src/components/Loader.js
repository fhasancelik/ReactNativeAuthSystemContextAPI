import { StyleSheet, Text, View ,Modal,Alert, ActivityIndicator} from 'react-native'
import React from 'react'

const Loader = ({modalVisible,setModalVisible}) => {


  return (
  
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
        <ActivityIndicator size={'large'}/>
          </View>
        </View>
      </Modal>




  )
}


const styles = StyleSheet.create({
container:{
    flex:1,
    position:'absolute',
    top:0
},
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalView: {
    width:100,
    height:100,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent:'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },



})

export default Loader
