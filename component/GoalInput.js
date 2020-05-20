
import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';



const GoalInput = (props) => {
    const [enteredGoal, setInputText] = useState("");
    const goalInputHandler = (enterText) => {
        setInputText(enterText)
    }

    return (
        <View>
            <View>
                <TextInput placeholder="Course Goals" style={styles.TextInputStyle} onChangeText={goalInputHandler} />
            </View>
            <View>
                <Button title="Add" onPress={(()=>props.goalHandler(enteredGoal))} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInputStyle: {
        marginLeft: 30, width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, paddingTop: 40
    }
})
export default GoalInput