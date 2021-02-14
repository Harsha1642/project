import React ,{Component,useState} from 'react'
import {View ,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'

const Screen=(props)=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    var error=""
    return(
        <View style={{flex:1,backgroundColor:"powderblue"}}>
            <View style={styles.background}>
                <TextInput
                    style={{fontSize:18}}
                    placeholder="Username"
                    onChangeText={(newText)=>setUsername(newText)}
                    value={username}
                />
            </View>
            <View style={styles.background}>
                <TextInput
                    secureTextEntry={true}
                    style={{fontSize:18}}
                    placeholder="Password"
                    onChangeText={(newText)=>setPassword(newText)}
                    value={password}
                />
            </View>
            <View style={styles.opacitystyle}>
                <TouchableOpacity
                    onPress={()=>{
                        if(username=="" && password==""){
                            alert("please enter username and password")
                        }
                        else if(username==""){
                            alert("username cannot be empty")
                        }
                        else if(password==""){
                            alert("password cannot be empty")
                        }
                        else{
                            username=="project" && password=="project"?props.navigation.navigate("Home"):alert("Oops...wrong credentials")}}
                    }>
                
                    <Text style={{fontSize:25,color:"green",fontWeight:"bold"}}>Enter</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
const styles=StyleSheet.create({
    background:{
       height:45,
       marginHorizontal:50,
       marginTop:30,
       backgroundColor:"gray",
       borderRadius:10
    },
    opacitystyle:{
     
        marginHorizontal:140,
        marginTop:30,

    }
})
export default Screen;