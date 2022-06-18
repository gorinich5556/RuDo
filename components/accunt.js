import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


export default function Acuunt({ navigation }) {
    const loadscene = () => navigation.navigate('Details')

    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style = {styles.hello}>FFKGJ</Text>
            <Button onPress={loadscene}  title='next screen' />
        </View>
    );
};

const styles = StyleSheet.create({
    hello: {
        color: 'red'
    }
});