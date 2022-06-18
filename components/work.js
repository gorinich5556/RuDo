import  React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Work({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}  title='prev screen' />
      <Text>jjjjjjjjjj</Text>
    </View>
  );
}
