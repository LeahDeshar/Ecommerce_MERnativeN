import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'

const Footer = () => {
  const route = useRoute()
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={()=> navigation.navigate("home")}>
        <AntDesign name='home' style={[styles.icon,route.name === "home" && styles.active]}/>
        <Text style={[styles.iconText,route.name === "home" && styles.active]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}>
        <AntDesign name='bells' style={[styles.icon,route.name === "notification" && styles.active]}/>
        <Text style={[styles.iconText,route.name === "notification" && styles.active]}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('account')}>
        <AntDesign name='user' style={[styles.icon,route.name === "account" && styles.active]}/>
        <Text style={[styles.iconText,route.name === "account" && styles.active]}>Account</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuContainer} onPress={()=> navigation.navigate("CART")}>
        <AntDesign name='shoppingcart' style={[styles.icon,route.name === "CART" && styles.active]}/>
        <Text style={[styles.iconText,route.name === "CART" && styles.active]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer} onPress={()=> navigation.navigate("login")}>
        <AntDesign name='logout' style={styles.icon}/>
        <Text style={styles.iconText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 10

  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: 25,
    color: "#000"
  },
  iconText: {
    color: "#000",
    fontSize: 10
  },
  active: {
    color: "blue"
  }
})