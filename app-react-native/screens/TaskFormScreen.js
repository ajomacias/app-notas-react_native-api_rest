import React ,{useEffect} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Layout from '../components/Layout';

const TaskFormScreen = ()=>{
    useEffect(()=>{
        console.log('cargo')
    }, [])
    return(
        <Layout>
         <Text>Form </Text>
         <TextInput
         style={styles.formInput}
         placeholder="Write title"
         />
         <TextInput
         style={styles.formInput}
         placeholder="Write text"
         />
        </Layout>
    );
} 

const styles = StyleSheet.create({
    formInput: {
        width:'90%',
        backgroundColor:'#ffffff',
        marginBottom:20,
        fontSize:20,
        padding:7,
    }
})

export default TaskFormScreen;