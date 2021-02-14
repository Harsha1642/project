import React ,{useState} from 'react'
import {View ,Text} from 'react-native'
import ColorDetails from './ColorDetails'

const ColorScreen=()=>{
    const [red,setRed]=useState(0)
    const [blue,setBlue]=useState(0) 
    const [green,setGreen]=useState(0)
    
    const increment=15
    const setColor=(color,change)=>{
        if(color == 'red'){
            if(red+change>255 || red+change<0){
                return;
            }else{
                setRed(red+change)
            }

        }
        else if(color =='green'){
            if(green+change>255 || green+change<0){
                return;
            }else{
               setGreen(green+change)
            }

        }
        else if(color == 'blue'){
            if(blue+change>255 || blue+change<0){
                return;
            }else{
                 setBlue(blue+change)
            }

        }
    }
    return(
        <View >
            
        <ColorDetails
            onIncrease={()=>setColor('red',increment)} 
            onDecrease={()=> setColor('red',-increment)} 
            color="Red"
            textColorValue="red"/>

        <ColorDetails 
            onIncrease={()=>setColor('green',increment)} 
            onDecrease={()=> setColor('green',-increment)} 
            color="Green"
            textColorValue="green"/>

        <ColorDetails 
            onIncrease={()=>setColor('blue',increment)} 
            onDecrease={()=> setColor('blue',-increment)} 
            color="Blue"
            textColorValue="blue"/>
        
        <View 
            style={
                {width:100,
                height:100,
                backgroundColor:`rgb(${red},${green},${blue})`,
                marginLeft:120,
                marginTop:20,
                margin:10
                }}/>
            <Text style={{marginLeft:85}}>RGB value is ({red} {green} {blue})</Text>
        </View>
    )
}
export default ColorScreen;