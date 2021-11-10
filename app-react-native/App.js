import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="HomeScreen"
          component={HomeScreen}
          options={ ({ navigation })=> ({
            title: 'Tasks app',
            headerStyle: { backgroundColor: '#222f3e' },
            headerStyle:{ backgroundColor: '#ffff' },
            headerRight: ()=> (
              <TouchableOpacity onPress={()=>navigation.navigate('TaskFormScreen')} >
              <Text style={{fontSize:15}} >New</Text>
              </TouchableOpacity>
            )
          })} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
const styles = new StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#040404'
  }
});
export default App;