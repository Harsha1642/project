import React ,{Component} from 'react'
import {View ,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'

const Screen1=(props)=>{
    return(
        <View style={styles.container,{flex:1,backgroundColor:"rgb(150,255,180)"}} >

            <View style={styles.buttonstyle}>
                <TouchableOpacity  onPress={()=>props.navigation.navigate("Image")}>
                <Text style={{color:"blue",fontSize:20,fontWeight:"bold"}}>IMAGES</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonstyle}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Color")}>
                <Text style={{color:"green",fontSize:20,fontWeight:"bold"}}>COLORS</Text>
                </TouchableOpacity>  
            </View>
            <View style={styles.buttonstyle}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("ColorCounter")}>
                <Text style={{color:"rgb(70,0,70)",fontSize:20,fontWeight:"bold"}}>COLORVALUE</Text>
                </TouchableOpacity>  
            </View>
            <View style={styles.buttonstyle}>
                <TouchableOpacity
                    onPress={()=>props.navigation.navigate("Count")} >
                    <Text style={styles.buttonstyle,{fontSize:20,color:"rgb(255,105,0)",fontWeight:"bold"}}>INCREMENT</Text>   
                </TouchableOpacity>
                
                 
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginStart:80,
        marginEnd:60,
        
    },
    buttonstyle:{
        margin:20,
        alignSelf:"center"

    }
})
export default Screen1;