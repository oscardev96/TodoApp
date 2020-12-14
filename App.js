import React from 'react';
import { View , Text ,StyleSheet ,SafeAreaView } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import TodoList from "./src/todolist";
const App = () => {
  return (
    <View style={styles.container}>
        <SafeAreaView>
            <Text style={styles.text} >ToDoList Demo</Text>
          <TodoList/>
        </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  container :{
      flex:1,
    
  },
  text:{
    textAlign :'center',
    fontWeight : "bold",
    fontSize: 30,
  }
});
export default App;