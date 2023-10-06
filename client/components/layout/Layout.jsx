import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { StatusBar } from 'expo-status-bar'
import Categories from '../category/Categories'

const Layout = ({children}) => {
  return (
    <>
    <StatusBar barStyle="light-content"/>
      <View>
        {children}
      </View>
      <View style={styles.footer}>
      <Footer/>

      </View>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({
  footer:{
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 30,
    padding: 10,
  }
})