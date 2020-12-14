import React from 'react';
import { Text, View, Modal,StyleSheet } from 'react-native';
import Ionicons from"react-native-vector-icons/Ionicons";
import { CheckBox } from 'react-native-elements'


const TodoItem = (props) => {
    return(
        <View style={styles.container}>
            

            <Ionicons 
                style={styles.check} 
                name= "checkmark-circle-outline" 
                size ={25}
                onPress={props.checkItem}
                />
            <Text style={props.item.isDone ? styles.doneClass:styles.normalClass} >{props.item.title}</Text>
            <View style={styles.action}>
                <Ionicons  name= "create-outline" size ={25}/>
                <Ionicons
                 name= "trash-outline"
                  size ={25}
                  onPress={props.delete}
                  />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        marginTop:20,
        width :300,
        padding :10,
        borderRadius:10,
        borderWidth :2,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
        
    },
    check:{
        position: "absolute",
        left :10
    },
    action :{
        flexDirection : "row",
        position:"absolute",
        right:10
    },
    doneClass: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'red',
    fontSize :20
    },
    normalClass: {
        color: 'black',
        fontSize :20
    }
});
export default TodoItem;
