import React from 'react'
import { View, Text, FlatList } from 'react-native';
import TaskItem from './TaskItem'

const TasksList = ({ tasks }) => {

    const renderItem = ({item})=>{
        return <TaskItem task={item} />;
    }

    return (
        <FlatList
        style={{width:'100%'}}
            data={tasks}
            keyExtractor={(item) => item.id_task + ""}
            renderItem={renderItem}
        />
    )
}

export default TasksList
