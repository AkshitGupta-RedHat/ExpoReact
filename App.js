import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalText from './component/GoalText';
import GoalInput from './component/GoalInput';
export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setInputText] = useState("");


  const addGoalHandler = goalEntered => {

    setCourseGoals([...courseGoals,
    { key: Math.random().toString, value: goalEntered }]);
    console.log("text addedd", courseGoals);
  }

  return (
    <View>
    <GoalInput goalHandler= {addGoalHandler}/>
      <View>
           
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>
        <GoalText item={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
 

});
