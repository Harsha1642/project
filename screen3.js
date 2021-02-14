import React ,{Component} from 'react'
import {View ,Text,Button,TouchableOpacity} from 'react-native'
import ImageDetails from './ImageDetails'
const Screen3=(props)=>{
    return(
        <View>
            <ImageDetails title="Forest" source={require("./assets/forest.jpg")}/>
            <ImageDetails title="Beach" source={require("./assets/beach.jpg")}/>
            <ImageDetails title="Mountain" source={require("./assets/mountain.jpg")}/>
        </View>
    )
}
export default Screen3;