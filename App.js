import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setInputText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setInputText(enterText)
  }

  const addGoalHandler = () => {

    setCourseGoals([...courseGoals, 
      {key:Math.random().toString,value: enteredGoal}]);
    console.log("text addedd", courseGoals);
  }

  return (
    <View>
      <View>
        <TextInput placeholder="Course Goals" style={styles.TextInputStyle} onChangeText={goalInputHandler} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData => (  
        <View style={styles.listStyle}>
          <Text>{itemData.item.value}</Text>
        </View>)} />
    </View>
  );
}

const styles = StyleSheet.create({
  TextInputStyle: {
    marginLeft: 30, width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 40
  },
  listStyle: {
    padding: 10,
    marginLeft: 30,
    color: 'red',
    borderColor: 'black',
    borderWidth: 1
  }
});
