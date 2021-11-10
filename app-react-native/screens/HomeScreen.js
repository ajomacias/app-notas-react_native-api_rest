import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getTasks } from '../api';
import Layout from '../components/Layout';

import TasksList from '../components/TasksList';

const  HomeScreen = () => {

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    }
    
    useEffect(() => {
        loadTasks()
    },[])
    return (
        <Layout>
         <TasksList tasks={tasks} />
        </Layout>
    )
}
export default HomeScreen;