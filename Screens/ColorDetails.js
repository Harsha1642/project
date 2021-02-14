import React ,{Component} from 'react'
import {View ,Text,Button,StyleSheet} from 'react-native'


const ColorDetails=(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.buttonstyle}>
                <Text style={{color:`${props.textColorValue}`,fontWeight:"bold"}}>{props.color}</Text>
                <Button
                onPress={()=>props.onIncrease()}
                color="black"
                title={`Increase ${props.color}`}
                
                />
            </View>
            <View style={styles.buttonstyle}>  
            <Button
                onPress={()=>props.onDecrease()}
                color="powderblue"
                title={`Decrease ${props.color}`}
                />
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginStart:60,
        marginEnd:60,
        margin:12
        
    },
    buttonstyle:{
        margin:8,
    }

})
export default ColorDetails;