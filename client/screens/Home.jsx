import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../components/layout/Layout'
import Categories from '../components/category/Categories'
import Banner from '../components/Banner/Banner'
import Products from '../components/products/Products'
import Header from '../components/layout/Header'

const Home = () => {
  return (
    <Layout>
       <Header/>
       <Categories/>
       <Banner/>
       <Products/>
    </Layout>
  )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  