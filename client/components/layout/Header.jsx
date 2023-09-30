import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import Categories from '../category/Categories';

const Header = () => {
    const [search,setSearch]=useState("");
    const searchHandler = ()=>
    {
        console.log(search)
        setSearch("")
    }
  return (
    <View style={{height: 150,paddingTop: 50,backgroundColor: "#c5c4c4"}}>
        <View style={styles.container}>
            <TextInput style={styles.input} value={search} onChangeText={(text)=>setSearch(text)}/>
            <TouchableOpacity style={styles.searchBtn} onPress={searchHandler}>
                <FontAwesome name='search' style={styles.searchIcon}/>
            </TouchableOpacity>
        </View>
        {/* <Categories/> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    input: {
        borderWidth: 0.3,
        borderColor:  'transparent',
        width: "100%",
        position: "absolute",
        left: 12,
        height: 40,
        color: "#000",
        backgroundColor: "#fff",
        paddingLeft: 20,
        fontSize: 16,
        borderRadius: 15,
    },
    searchBtn: {
        position: "absolute",
        left: '95%',
    },
    searchIcon: {
        fontSize: 15
    }
})