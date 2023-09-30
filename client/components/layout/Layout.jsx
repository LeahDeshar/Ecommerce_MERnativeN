import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { StatusBar } from 'expo-status-bar'
import Categories from '../category/Categories'

const Layout = ({children}) => {
  return (
    <>
    <StatusBar barStyle="light-content"/>
    <Header/>
      <View>
        {children}
      </View>
      <Footer/>
    </>
  )
}

export default Layout