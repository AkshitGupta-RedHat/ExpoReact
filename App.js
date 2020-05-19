import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  // const [inputText, SetInputText] = useState("Text Changed");
  return (
    <View style={ styles.screen}>
      <View style={{}}><Text>hell</Text>
      </View>
      <View style={{ width: 50, height: 50, backgroundColor: 'green',flex:1 }}>
      </View>
      <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}>
      </View>
      <View style={{justifyContent: 'space-between', alignItem: 'center' }}>
        <TextInput placeholder="Course Goals" style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10 }} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50,width:"100%",height:300,flexDirection:"row",justifyContent:'space-around',alignItems:"center" 
  },
  red:{
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
