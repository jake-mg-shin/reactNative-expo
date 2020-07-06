import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    },
});
