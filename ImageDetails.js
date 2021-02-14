import React ,{Component} from 'react'
import {View ,Text,Image} from 'react-native'

const ImageDetails=(props)=>{
    return(
        <View>
            <Text>{props.title}</Text>
            <Image source={props.source}/>
        </View>
    )
}
export default ImageDetails;