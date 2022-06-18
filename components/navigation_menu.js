import { StyleSheet, View , SafeAreaView, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import jj from './accunt'


export default function NavigateMenu({ navigation }) {

  const navigation_on_press = () => console.log('clicked');
  const navigation_on_press_accunt = () =>{
   console.log('clicked button accunt')
    }
  const navigation_on_press_plus =  () =>{
    console.log('clicked button plus');
    }
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.navigation_button}>
        <TouchableWithoutFeedback onPress={navigation_on_press_accunt}>
          <View OnPress = {() => console.log('hgfgh')} style = {[styles.button, styles.button_accunt ]}>
            <Image style = {styles.icon_accunt} source={require('G:/egor/myflobalproject/RuDo/RuDo/assets/icon-accunt.png')} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={navigation_on_press_plus}>
        <View style={[styles.button, styles.button_plus]}>
          <Image style = {styles.icon_accunt} source={require('G:/egor/myflobalproject/RuDo/RuDo/assets/icon-plus.png')} />
        </View>
      </TouchableWithoutFeedback>
      </View>
      <View style = {styles.separator}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop: 25,
  },
  navigation_button: {
    flexDirection: 'row',
    height: 69,
    flex: 1
  },
  button:{
    flex: 1,
    height: 80,
  },
  button_1:{
    flex: 1,
    height: 69,
    backgroundColor: 'black'
  },
  icon_accunt:{
    width:54,
    height:54,
    marginLeft: 80,
    marginTop: 15,
  },
  separator:{
    backgroundColor: 'red',
    height: 7,
    flex: 0,
    marginTop: 80,
  },
  iconplus:{

  },
  button_plus:{
    backgroundColor:'#01F5E7',
    width:200,
    paddingBottom: 12,
    marginBottom: -11,
  },
  button_accunt:{
    backgroundColor: '#00DED1',
    width:235,
    height:80,
  }
});