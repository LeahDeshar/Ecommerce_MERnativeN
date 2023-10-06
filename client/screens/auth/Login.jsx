import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/form/InputBox'

const Login = ({navigation}) => {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const handleLogin= () =>{
        if(!email || !password)
        {
            return alert("Please enter your information")
        }
        alert("Login Successfully")
        navigation.navigate("home")
    }
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/login.png")} style={styles.image}/>
      
      <InputBox placeholder={"Enter Your Email"} 
        autoComplete={"email"}
        value={email}
        setValue={setEmail}/>

      <InputBox placeholder={"Enter Your Password"} 
        secureTextEntry={true}
        value={password}    
        setValue={setPassword}/>

        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>Don't Have Account? <Text onPress={()=>navigation.navigate("register")}style={styles.link}>Register</Text></Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    image: {
        height: 200,
        width: "100%",
        resizeMode: "contain"
    },
    loginBtn:{
        backgroundColor: "#000",
        width: "80%",
        justifyContent: 'center',
        height: 40, 
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 20

    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: "center"
    },
    loginBtnText:{
        color:"#fff",
        textAlign: 'center',
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize: 18
    },
    link: {
        color: 'red'
    }
})