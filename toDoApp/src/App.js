import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import ToDoCard from "./components/ToDoCard/ToDoCard";

function App(){
  return(
    <View style={styles.container}>
      <ToDoCard/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgrounColor:'#404040'
  }
});

export default App;