import React ,{Component,useState} from 'react'
import {View ,FlatList,Button,StyleSheet} from 'react-native'

const Screen2=(props)=>{
    const [anycolor,setColor]=useState([])
    return(
        <View style={styles.container}>
        <Button
        color="rgb(180,0,0)"
        title="add color"
        onPress={()=>setColor([...anycolor,GetColor()])}
        />
       
        <FlatList
        keyExtractor={(item)=>item}
        data={anycolor}
        renderItem={({item})=>{
            return  <View style={
                {width:100,
                height:100,
                backgroundColor:GetColor(),
                marginLeft:60,
                margin:10
            }}></View>
        }}
        />
        </View>
    )
}
const GetColor=()=>{
    var red=Math.floor(Math.random()*256)
    var blue=Math.floor(Math.random()*256)
    var green=Math.floor(Math.random()*256)
    return `rgb(${red},${blue},${green})`
}
const styles=StyleSheet.create({
    container:{
        marginStart:60,
        marginEnd:60,
        padding:20
        
    }
})
export default Screen2;