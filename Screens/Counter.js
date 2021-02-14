import React,{useReducer} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
 const Counter=()=>{
     const func=(state,action)=>{
        return {...state,value:state.value+action.weight}
     }
     const [state,dispatch]=useReducer(func,{value:0})
     return(
         <View style={styles.buttonstyle}>
            <View style={{margin:20}}>
                <Button
                title="INCREASE"
                color="rgb(45,165,120)"
                onPress={()=>{dispatch({weight:1})}}

                />
            </View>
            <View style={{margin:20}}>
                <Button
                color="rgb(255,105,120)"
                title="DECREASE"
                onPress={()=>{dispatch({weight:-1})}}
                />
            </View>
            <Text 
            style={styles.buttonstyle,
            {fontWeight:"bold",fontSize:20,marginVertical:40,marginLeft:18}}>COUNT VALUE: {state.value}</Text>
         </View>
     )
 }
 const styles=StyleSheet.create({
     buttonstyle:{
         marginStart:60,
         marginEnd:60,
         padding:10
     }
 })
 export default Counter;