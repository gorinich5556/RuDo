import React from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, SafeAreaView, Image } from 'react-native';


export default function Work({ navigation }) {
    const navigation_on_press_accunt = () =>{
        console.log('clicked button accunt')
        navigation.navigate('Home')
         }
       const navigation_on_press_plus =  () =>{
         console.log('clicked button plus');
         navigation.navigate('Details')
         }

    return(
        <View>
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
            <Text>Work screen</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    hello: {
        color: 'red'
    },
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
      backgroundColor:'#00DED1',
      width:200,
      paddingBottom: 12,
      marginBottom: -11,
    },
    button_accunt:{
      backgroundColor: '#01F5E7',
      width:235,
      height:80,
    }
  });
