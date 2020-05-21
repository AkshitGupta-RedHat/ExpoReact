import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalText from './component/GoalText';
import GoalInput from './component/GoalInput';
export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setInputText] = useState("");


  const addGoalHandler = goalEntered => {
    setCourseGoals([...courseGoals,
    { key: Math.random(), value: goalEntered }]);
    console.log("text addedd", courseGoals);
  }
  const removeCourseGoals = goalID => {
    console.log("toch working", goalID);
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goals) => goals.key !== goalID);
      }  )
      console.log("new text working", courseGoals);
  }
  return (
    <View>
      <GoalInput goalHandler={addGoalHandler} />
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>
        // console.log("itemData",itemData)
        <GoalText id={itemData.item.key} item={itemData.item.value} onDelete={removeCourseGoals} />} />
    </View>
  );
}

const styles = StyleSheet.create({


});
