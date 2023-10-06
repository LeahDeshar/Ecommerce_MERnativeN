import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const InputBox = ({autoComplete,placeholder,secureTextEntry,value,setValue}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
       autoComplete={autoComplete} 
       placeholder={placeholder}
       autoCorrect={false}
       secureTextEntry={secureTextEntry}
       value={value}
       onChangeText={(text)=>setValue(text)}
       />
    </View>
  )
}

export default InputBox
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    input : {
        width: "80%",
        backgroundColor: "#fff",
        height: 40,
        paddingLeft: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1,
        borderColor: "lightgray"
    }
})