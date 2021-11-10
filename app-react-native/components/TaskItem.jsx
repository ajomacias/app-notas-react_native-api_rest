import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TaskItem = ({ task }) => {
    console.log(task);
    return (
        <View style={styles.itemContainer} >
            <Text style={styles.itemTitle} >{task.title_task}</Text>
            <Text style={styles.itemTitle} >{task.text_task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor:'#333333',
        padding:20,
        marginVertical:10
    },
    itemTitle:{
        color:'#ffffff',

    }
})

export default TaskItem

