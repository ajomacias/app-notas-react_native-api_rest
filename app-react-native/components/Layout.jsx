import React from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';

const Layout = ({ children }) =>{
    return(
        <View style={styles.container} >
            <StatusBar/>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#0b0d1b',
        padding:20
    }
})

export default Layout;