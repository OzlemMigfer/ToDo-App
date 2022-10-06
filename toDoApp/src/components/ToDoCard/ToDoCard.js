import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddText = () => {
        setTasks([...tasks, text]);
        setText("");
    };
    const handleDeleteText = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return(
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.title}>Yapılacaklar</Text>
                <Text style={styles.counter}>{tasks.length}</Text>
            </View>
            <FlatList
                data={tasks}
                renderItem={({item, index}) => (
                    <TouchableOpacity 
                        style={styles.delete_style}
                        onPress={() => handleDeleteText(index)}
                    >
                        <View style={styles.task_container}>
                            <Text style={styles.task_content}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item + Date.now() + Math.random()}
            />

            <View style={styles.inner_container}>
                <TextInput 
                    style={styles.input_style}
                    placeholder='Yapılacak...'
                    placeholderTextColor='gray'
                    editable
                    maxLength={100}
                    underlineColorAndroid='gray'
                    value={text}
                    onChangeText={setText}
                />
                <TouchableOpacity 
                    style={styles.button_container}
                    onPress={handleAddText}
                >
                    <Text style={styles.button_text}>KAYDET</Text>                
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ToDoCard;