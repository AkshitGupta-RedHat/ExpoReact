import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const GoalText = props => {
    return(
        <View style={styles.listStyle}>
        <Text>{props.item}</Text>
      </View>
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