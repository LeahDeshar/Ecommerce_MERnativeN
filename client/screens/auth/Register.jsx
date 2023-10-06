import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/form/InputBox'

const Register = ({navigation}) => {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [name,setName] =useState('')


    const handleRegister = () =>{
        if(!email || !password || !name)
        {
            return alert("Please enter your information")
        }
        alert("Registered Successfully")
        navigation.navigate("login")
    }
  return (
    <View style={styles.container}>
        <Image source={require("../../assets/login.png")} style={styles.image}/>

        <InputBox placeholder={"Enter Your Name"} 
        autoComplete={"name"}
        value={name}
        setValue={setName}/>

      <InputBox placeholder={"Enter Your Email"} 
        autoComplete={"email"}
        value={email}
        setValue={setEmail}/>
        

      <InputBox placeholder={"Enter Your Password"} 
        secureTextEntry={true}
        value={password}    
        setValue={setPassword}/>

        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>Already Have Account? <Text onPress={()=>navigation.navigate("login")}style={styles.link}>Login</Text></Text>
      </View>
    </View>
  )
}

export default Register

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