import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GoalText = props => {
    console.log("goaltext",props.id);
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listStyle}>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        padding: 10,
        marginLeft: 30,
        color: 'red',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalText