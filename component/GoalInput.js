
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
            {/* Used bind method to send wnrwesgoal to vutton as an argument */}
                <Button title="Add" onPress={props.goalHandler.bind(this,enteredGoal)} />
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