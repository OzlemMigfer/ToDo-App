import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#262626',
        justifyContent:'space-between'
    },
    header_container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        color:'#b3b300',
        fontSize:30,
        padding:10
    },
    counter:{
        color:'#b3b300',
        fontSize:30,
        padding:10
    },
    inner_container:{
        borderRadius:10,
        margin:10,
        backgroundColor:'#404040',

    },
    input_style:{
        paddingVertical:20,
        backgroundColor:'#404040',
        margin:10,
        color:'white',
        fontSize:18
    },
    button_container:{
        paddingHorizontal:12,
        paddingVertical:1,
        backgroundColor:'#808080',
        borderRadius:10,
        alignItems:'center',
        margin:10
    },
    button_text:{
        paddingHorizontal:12,
        paddingVertical:16,
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    task_container:{
        backgroundColor:'#b3b300',
        margin:8,
        borderRadius:7,
        padding:10
    },
    task_content:{
        fontSize:18,
        color:'white'
    },
    
});