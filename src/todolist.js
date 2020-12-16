import React , {useState} from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View, FlatList,Modal,TouchableHighlight } from 'react-native';
import Ionicons from"react-native-vector-icons/Ionicons";
import TodoItem from './todoitem';


const TodoList = () => {
    const [data, setData] = useState([{id:"dsa",title:"to do 1",isDone:false}]);
    const [value, setValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [textEdit, settextEdit] = useState('');
    const [Id, setId] = useState('');

    
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
    const deleteItem = (id) => {
        let newArr = data.filter((data)=>data.id !== id);
        // let index = data.indexOf(data.id === id);
        // let newArr = data.splice(index,1);
        setData(newArr)
    }
    const checkItem = (id) => {
        
        let newArr = data.map(item => 
            item.id === id ? {...item, ...{isDone: !item.isDone}}: item
        )
        setData(newArr);
    }
    const editItem = (id) => {
        setModalVisible(true);
        setId(id);
  

    }
    const changeItem = () => {
        let id = Id;
        let newArr = data.map(item => 
            item.id === id ? {...item, ...{title: textEdit}}: item
        )
        setData(newArr);
        setModalVisible(false);
        
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
                renderItem = {({item},index)=>{
                        return(
                          <TodoItem 
                            item = {item}
                            del = {()=>{deleteItem(item.id)}}
                            checkItem = {()=>{checkItem(item.id)}}
                            edit = {()=>{editItem(item.id)}}
                        />)
                }}
                />
            </View>
            

                <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Item</Text>
            <TextInput
                value = {textEdit}
                onChangeText = {(text)=>{
                    settextEdit(text);
                }}
                onSubmitEditing={changeItem}
                style = {styles.input}

            />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>CLOSE</Text>
            </TouchableHighlight>
                        <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={changeItem}
            >
              <Text style={styles.textStyle}>SAVE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
        flexDirection:"row",
       
    },
    todolist:{

    },

    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop:10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize :20,
  }

});

export default TodoList;
