import React , {useState} from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import Ionicons from"react-native-vector-icons/Ionicons";
import TodoItem from './todoitem';


const TodoList = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const additem = () => {
        let newItem = {
            id : new Date().toString(),
            title : value,
            isDone : false,
        };
        if(value.length > 0 ){
            setData(data.concat([newItem]));
            setValue('')
        }
        
    }




    return (
        <View style={styles.container}>
            <View style={styles.wrapinput} >
                <TextInput
                style={styles.input}
                value = {value}
                onChangeText = {(text) =>{
                    setValue(text);
                }}
                onSubmitEditing ={additem}
            />
            <Ionicons name= "add-circle-outline" size={40} onPress={additem}/>
            </View>
            <View style={styles.todolist}>
                <FlatList
                data = {data}
                renderItem = {({item})=>{
                        return(
                          <TodoItem 
                            item = {item}
                        
                        />)
                
                }}
            />
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        alignItems :"center",
        marginTop : 20
    },
    input:{
        width:250,
        marginLeft : 20,
        padding :10 ,
        borderRadius :10,
        borderWidth:2
    },
    wrapinput:{
        flexDirection:"row"
    },
    todolist:{

    }

});

export default TodoList;
